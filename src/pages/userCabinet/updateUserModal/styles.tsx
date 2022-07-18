import styled from "styled-components";

const UserForm = styled.form`
  min-width: 300px;
  max-width: 1200px;
  overflow-y: scroll;
  height: 90vh;;
  padding: 20px;
  border-radius: 10px;
  background-color: ${p => p.theme.colors.light_gray};
`;

const ButtonWrapper = styled.div`
  display: flex;
`

export { UserForm, ButtonWrapper };