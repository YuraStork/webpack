import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing:border-box;
    padding: 0;
    margin: 0;
  }

  body{
    overflow: hidden;
    font-family: Roboto;
  }
  li{
    list-style-type: none;
  }

  a{
    text-decoration: none;
    color: #6363fa;
  }

  ${normalize}
`