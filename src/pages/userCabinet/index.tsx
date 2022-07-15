import { Button } from "components/button/styles";
import { Container } from "components/container/styles";
import { Input } from "components/input";
import { AuthContext } from "context/auth.context";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import { MainTitle } from "styles/typography/styles";
import { UserCabinetSection, UserForm } from "./styles";
import { setInitialValues, onSubmit, validationSchema, defaultUserValues } from "./const";
import { getUser } from "api/user.api";
import { TextEditor } from "components/textEditor";
import { ImageCrop } from "components/image-crop";

export const UserCabinet = () => {
  const [editMode, setEditMode] = useState(false);
  const { userData, logout } = useContext(AuthContext);
  const [userFullData, setUserFullData] = useState<any>(defaultUserValues);
  const [isLoading, setIsLoading] = useState(false);
  const [biography, setBiography] = useState("");

  const handleEdit = () => setEditMode(!editMode);
  const userFields: any = Object.entries(userFullData || {}).filter(
    ([key, value]) => key !== "id" && key !== "role" && key !== "email" && key !== "biography"
  );

  const getUserData = async () => {
    setIsLoading(true);
    const res = await getUser(userData?.user.id || "", logout);
    if (res) {
      setUserFullData(res?.data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getUserData();
  }, []);

  const formik = useFormik({
    initialValues: setInitialValues(userFullData),
    onSubmit: (data, helper) => onSubmit({ ...data, id: userData?.user.id || "", biography, handleEdit }, helper),
    validationSchema,
    enableReinitialize: true,
  });

  return (
    <UserCabinetSection>
      <Container>
        <MainTitle>Cabinet</MainTitle>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : editMode ? (<>
          <ImageCrop />
          <UserForm onSubmit={formik.handleSubmit}>
            {userFields.map(([key, value]: any) => (
              <Input
                key={key}
                label={key}
                name={key}
                type="text"
                value={formik.values[key] || ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            ))}
            <TextEditor name="biography" onChange={(str: string) => setBiography(str)} value={userFullData.biography} />
            <Button type="submit">Save</Button>
          </UserForm>
        </>) : <>
          <ul>
            {userFields.map((p: any) => (
              <li key={p[0]}>
                {p[0]}: {p[1]}
              </li>
            ))}
          </ul>

          {!editMode && (
            <div>
              <Button onClick={handleEdit}>Edit</Button>
            </div>
          )}
        </>
        }
      </Container>
    </UserCabinetSection>
  );
};
