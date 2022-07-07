import styled from 'styled-components';

const HeaderComponent = styled.header`
  height: 50px;
  padding: 10px;
  background-color: black;
  color: white;

  & > div{
    display: flex;
  }
`

export { HeaderComponent }