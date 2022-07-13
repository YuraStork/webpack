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
} from "./styles";

export const AboutPage = () => {
  let rotateY = 69;
  let rotateX = -17;
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
          ref.current.style.transform = `rotateX(${(rotateX += 4)}deg) rotateY(${rotateY}deg)`;
          break;
        case "ArrowDown":
          ref.current.style.transform = `rotateX(${(rotateX -= 4)}deg) rotateY(${rotateY}deg)`;
          break;
        case "ArrowRight":
          ref.current.style.transform = `rotateY(${(rotateY += 4)}deg)`;
          break;
        case "ArrowLeft":
          ref.current.style.transform = `rotateY(${(rotateY -= 4)}deg)`;
          break;
      }
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
        <KubContainer ref={ref}>
          <div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </div>
        </KubContainer>

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
      </Container>
    </AboutSection>
  );
};
