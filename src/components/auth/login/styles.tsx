import styled from "styled-components";

const LoginSection = styled.section`
  display: grid;
  grid-template: 1fr / auto auto; 
  justify-content: center;
  border: 1px solid ${p => p.theme.colors.light_gray};
  padding: 10px;
  background-color: #fff;
`

export { LoginSection }