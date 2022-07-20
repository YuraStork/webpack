import { Button } from "components/button/styles";
import { Container } from "components/container/styles";
import { useEffect, useState } from "react";
import {
  UserCabinetSection,
  AvatarWrapper,
  Wrapper,
  UserInfo,
  Biography,
  UserInfoWrapper,
  Avatar,
  ImagesWrapper,
  ButtonWrapper,
} from "./styles";
import { useAppDispatch, useAppSelector } from "store/store";
import { getUser } from "store/selectors/user.selector";
import { getUserProfileThunk } from "store/thunks/user.thunk";
import { UpdateUserModal } from "./updateUserModal";
import { HtmlText } from "components/htmlText";

export const UserCabinet = () => {
  const dispatch = useAppDispatch();
  const [editMode, setEditMode] = useState(false);
  const { data, isLoading } = useAppSelector(getUser);
  const handleEdit = () => setEditMode(!editMode);

  useEffect(() => {
    dispatch(getUserProfileThunk(data.id!));
  }, []);

  return (
    <UserCabinetSection>
      <Container>
        {isLoading ? (
          <h1 style={{ textAlign: "center" }}>Loading...</h1>
        ) : (
          <>
            <Wrapper>
              <ImagesWrapper>
                <img src={data.backgroundFon + `?id=${Math.floor(Math.random() * 100)}`} alt={data.name} />
                <AvatarWrapper>
                  <Avatar>
                    <img src={data.avatar} alt={data.name} />
                  </Avatar>
                  <div>{data.name}</div>
                </AvatarWrapper>
              </ImagesWrapper>

              <UserInfoWrapper>
                <UserInfo>
                  <div>
                    <span>Name</span> {data.name}
                  </div>
                  <div>
                    <span>Age</span> {data.age}
                  </div>
                  <div>
                    <span>Country</span> {data.country}
                  </div>
                  <div>
                    <span>City</span> {data.city}
                  </div>
                  <div>
                    <span>Color</span> {data.color}
                  </div>
                  <div>
                    <span>Gender</span> {data.gender}
                  </div>
                  <div>
                    <span>Bithday</span> {data.date}
                  </div>
                </UserInfo>

                <Biography>
                  <p>Biography</p>
                  <HtmlText str={data.biography ? data.biography : "You`ve not a biography yet "} />
                </Biography>
              </UserInfoWrapper>

              <ButtonWrapper>
                <Button onClick={handleEdit} color="#fff">
                  Edit
                </Button>
              </ButtonWrapper>
            </Wrapper>
          </>
        )}

        {editMode && <UpdateUserModal userData={data} handleEdit={handleEdit} />}
      </Container>
    </UserCabinetSection>
  );
};
