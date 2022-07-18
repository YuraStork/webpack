import styled from "styled-components";

const UserCabinetSection = styled.section`
  & > div {
    width: 1200px;
    padding: 5px;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template: 350px minmax(100px, auto) auto / 300px 1fr;
  gap: 30px;
  font-family: Roboto;
`;

// ------------------1----------------------
const ImagesWrapper = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 1/3;
  position: relative;
  padding-bottom: 60px;
  border: 10px solid #fff;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 10px 1px #bcbcbc;

  & > img {
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
  }
`;

const AvatarWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  display: flex;
  gap: 20px;
  padding-left: 60px;
  align-items: flex-start;
 

  & > div:last-child {
    padding-top: 40px;
    font-size: 22px;
    filter: invert(1);
    font-weight: 400;
  }
`;

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #fff;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    aspect-ratio: 1/1;
    box-shadow: 0px 0px 5px 1px black;
  }
`;
//---------------------2--------------------------

const UserInfoWrapper = styled.div`
  grid-column: 1/3;
  display: grid;
  grid-template: minmax(150px, auto) minmax(150px, auto) / 1fr;
  box-shadow: 2px 2px 10px 1px #bcbcbc;
`;

const UserInfo = styled.div`
  display: grid;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  & > div {
    width: 100%;
    font-family: "Roboto";
    font-weight: 400;
    padding: 5px 10px;
    border-bottom: 2px solid ${(p) => p.theme.colors.light_gray};

    & > span {
      display: inline-block;
      min-width: 75px;
      font-weight: 400;
      font-size: 18px;
    }
  }
`;

const Biography = styled.div`
  background-color: #fff;
  font-family: "Roboto";
  font-weight: 600;
  padding: 5px 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  text-align: justify;
  font-weight: 400;

  & > p {
    font-size: 23px;
    padding: 5px 5px 5px 0px;
  }
`;
//---------------------3--------------------------------

const ButtonWrapper = styled.div`
  box-shadow: 2px 2px 10px 1px #bcbcbc;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  grid-column: 1/3;
  
  & > button {
    width: 100px;
  }
`;

export {
  UserCabinetSection,
  Wrapper,
  ImagesWrapper,
  UserInfo,
  Biography,
  UserInfoWrapper,
  Avatar,
  AvatarWrapper,
  ButtonWrapper,
};
