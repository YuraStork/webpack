import styled from "styled-components";

const AuthSection = styled.section`
  display: grid;
  min-height: 100vh;
  align-items: center;
  grid-template: 1fr / 1fr 1fr;
  border: 1px solid ${(p) => p.theme.colors.light_gray};
  padding: 10px;
  background-color: #f0f2f5;
  gap: 40px;
  & > h1{
    text-align: right;
  }
`;
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  padding: 15px;
  min-width: 250px;
  max-width: 400px;
  border: 1px solid ${(p) => p.theme.colors.light_gray};
  box-shadow: 0px 0px 2px 0px #989898;

  & > a{
    width: max-content;
    display: inline-block;
    padding: 5px;
    transition: all .3s;
    &:hover{
      border-bottom: 1px solid ${p=>p.theme.colors.link} 
    }
  }
`
const Form = styled.form``;

export { AuthSection, Form, FormWrapper };
