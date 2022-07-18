import { Button } from "components/button/styles";
import { ImageCrop } from "components/image-crop";
import { Input } from "components/input";
import { TextEditor } from "components/textEditor";
import { useFormik } from "formik";
import { FC, useState } from "react";
import { useAppDispatch } from "store/store";
import {
  getUserProfileThunk,
  updateUserProfileThunk,
} from "store/thunks/user.thunk";
import { AuthorizedUser } from "types";
import { Portal } from "utils/portal";
import { filterFields, setInitialValues, validationSchema } from "../const";
import { UserForm, ButtonWrapper } from "./styles";
import { UserCabinetTypes } from "../types";

type UpdateUserModalTypes = {
  data: AuthorizedUser;
  handleEdit: () => void;
};
export const UpdateUserModal: FC<UpdateUserModalTypes> = ({
  data,
  handleEdit,
}) => {
  const dispatch = useAppDispatch();
  const [biography, setBiography] = useState(data.biography || "");

  const formik = useFormik({
    initialValues: setInitialValues(data),
    onSubmit: (profile, helper) => {
      const id = data?.id || "";
      dispatch(
        updateUserProfileThunk({
          ...profile,
          id,
          biography,
          avatar: data.avatar,
          backgroundFon: data.backgroundFon,
        })
      ).then(() => {
        dispatch(getUserProfileThunk(data.id));
      });
      handleEdit();
    },
    validationSchema,
    enableReinitialize: true,
  });

  const userFields: [keyof UserCabinetTypes, string][] = filterFields(data);

  return (
    <Portal>
      <UserForm onSubmit={formik.handleSubmit}>
        <div>
          <h3>Avatar</h3>
          <ImageCrop
            image={data.avatar}
            width={350}
            height={220}
            handleSavePhoto={(e) => console.log(e)}
          />
        </div>
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
        <TextEditor
          name="biography"
          onChange={(str: string) => setBiography(str)}
          value={data.biography}
        />

        <ButtonWrapper>
          <Button type="submit" color="#fff">
            Save
          </Button>{" "}
          <Button type="submit" color="#fff" onClick={handleEdit}>
            Cancel
          </Button>
        </ButtonWrapper>
      </UserForm>
    </Portal>
  );
};
