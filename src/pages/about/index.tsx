import { Container } from "components/container/styles";
import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import {
  AboutSection,
  KubContainer,
  RectangleContainer,
  TriangleContainer,
  CardStyled,
  Card,
  ButtonStyled,
  Mask
} from "./styles";

export const AboutPage = () => {
  let rotateX = 0;
  let rotateY = 0;
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", handleRotate);
    return () => {
      document.removeEventListener("keydown", handleRotate);
    };
  }, []);

  function handleRotate(e: KeyboardEvent) {
    console.log(rotateX, rotateY);
    if (ref.current?.style) {
      switch (e.key) {
        case "ArrowUp":
          rotateX += 4;
          break;
        case "ArrowDown":
          rotateX -= 4;
          break;
        case "ArrowRight":
          rotateY += 4;
          break;
        case "ArrowLeft":
          rotateY -= 4;
          break;
      }
      ref.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  
  }

  return (
    <AboutSection>
      <Container>
        <Container>
          <CSSTransition
            in={open}
            timeout={1000}
            mountOnEnter
            unmountOnExit
            classNames={{
              enter: "enter",
              enterDone: "enterDone",
              exitActive: "exit",
            }}
            onEnter={() => console.log("Enter")}
            onEntering={() => console.log("Entering")}
            onEntered={() => console.log("Entered")}
            onExit={() => console.log("Exit")}
            onExiting={() => console.log("Exiting")}
            onExited={() => console.log("Exited")}
          >
            <div className="anima">anime</div>
          </CSSTransition>
          <div>
            <button onClick={() => setOpen(!open)}>open</button>
          </div>
        </Container>

        <CardStyled>
          <div className="block">Card</div>
        </CardStyled>

        <ButtonStyled>
          button
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </ButtonStyled>

        <Card>
          <div>Front</div>
          <div>Side</div>
        </Card>

        <div>
          <div className="search"></div>
          <div className="pacman"></div>
          <div className="infinite"></div>
        </div>

        <TriangleContainer>
          <div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </TriangleContainer>
       

        <RectangleContainer>
          <div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </div>
        </RectangleContainer>

        <Mask>
          <img src="https://www.w3schools.com/css/img_5terre.jpg" alt=""  width="600" height="400"/>
        </Mask>

        <KubContainer >
          <div ref={ref}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </div>
        </KubContainer>
      </Container>
    </AboutSection>
  );
};
