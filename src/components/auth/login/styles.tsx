import styled from "styled-components";

const LoginSection = styled.section`
  display: grid;
  min-height: 100vh;
  align-items: center;
  grid-template: 1fr / 1fr 1fr;
  border: 1px solid ${(p) => p.theme.colors.light_gray};
  padding: 10px;
  background-color: #f0f2f5;
  gap: 40px;
  &>h1{
    text-align: right;
  }
`;
const Form = styled.form`
  padding: 15px;
  min-width: 250px;
  max-width: 400px;
  border: 1px solid ${(p) => p.theme.colors.light_gray};
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 2px 0px #989898;
`;

export { LoginSection, Form };
