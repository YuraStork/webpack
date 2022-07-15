import styled, { keyframes } from "styled-components";

const AboutSection = styled.section`
  border: 1px solid ${(p) => p.theme.colors.light_gray};
`;

const maskAnimation = keyframes`
  0%{
    transform: translateY(0px);
  }
  50%{
    transform: translateY(-200px);
  }
  100%{
    transform: translateY(0px);
  }
`;

const Mask = styled.div`
  mask-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1024px-Spotify_logo_with_text.svg.png");
  mask-size: 600px 200px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  mask-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1024px-Spotify_logo_with_text.svg.png");

  & > img {
    animation: ${maskAnimation} infinite 15s linear;
  }
`;
export { AboutSection, Mask };
