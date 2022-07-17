import { Button } from "components/button/styles";
import { Container } from "components/container/styles";
import { Input } from "components/input";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { MainTitle } from "styles/typography/styles";
import { UserCabinetSection, UserForm } from "./styles";
import { filterFields, setInitialValues, validationSchema } from "./const";
import { TextEditor } from "components/textEditor";
import { ImageCrop } from "components/image-crop";
import { useAppDispatch, useAppSelector } from "store/store";
import { getUser } from "store/selectors/user.selector";
import { getUserProfileThunk, updateUserProfileThunk } from "store/thunks/user.thunk";
import { UserCabinetTypes } from "./types";

export const UserCabinet = () => {
  const [editMode, setEditMode] = useState(false);
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector(getUser);
  const handleEdit = () => setEditMode(!editMode);
  const [biography, setBiography] = useState(data.biography || "");

  useEffect(() => {
    dispatch(getUserProfileThunk(data.id!))
  }, [])

  const userFields: [keyof UserCabinetTypes, string][] = filterFields(data);

  const formik = useFormik({
    initialValues: setInitialValues(data),
    onSubmit: (profile, helper) => {
      ;
      const id = data?.id || ""
      dispatch(updateUserProfileThunk({ ...profile, id, biography })).then(() => {
        dispatch(getUserProfileThunk(data.id!))
      })
      handleEdit();
    },
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
            {userFields.map(([key]: [keyof UserCabinetTypes, string]) => (
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
            <TextEditor name="biography" onChange={(str: string) => setBiography(str)} value={data.biography} />
            <Button type="submit">Save</Button>
          </UserForm>
        </>) : <>
          <ul>
            {userFields.map((p) => (
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
