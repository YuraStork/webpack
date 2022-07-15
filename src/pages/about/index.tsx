import { Container } from "components/container/styles";
import {
  AboutSection,
  Mask
} from "./styles";

export const AboutPage = () => {
  return (
    <AboutSection>
      <Container>
        <Mask>
          <img src="https://www.w3schools.com/css/img_5terre.jpg" alt="image"  width="600" height="400"/>
        </Mask>
      </Container>
    </AboutSection>
  );
};
