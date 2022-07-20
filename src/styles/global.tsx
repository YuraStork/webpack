import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing:border-box;
    padding: 0;
    margin: 0;
  }

  body{
    overflow-x: hidden;
    font-family: Roboto;
  }
  li{
    list-style-type: none;
  }

  a{
    text-decoration: none;
    color: #6363fa;
  }

  .image_default_styles{
    object-fit: cover;
    aspect-ratio: 1/1;
  }

  ${normalize}
`;
