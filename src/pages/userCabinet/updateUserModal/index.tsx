import { Button } from "components/button/styles";
import { ImageCrop } from "components/image-crop";
import { Input } from "components/input";
import { TextEditor } from "components/textEditor";
import { useFormik } from "formik";
import { ChangeEvent, FC, useState } from "react";
import { useAppDispatch } from "store/store";
import { Portal } from "utils/portal";
import { filterFields, setInitialValues, validationSchema, onSubmit } from "../const";
import { UserForm, ButtonWrapper } from "./styles";
import { UserCabinetTypes } from "../types";
import { UpdateUserModalTypes } from "./types";

export const UpdateUserModal: FC<UpdateUserModalTypes> = ({
  userData,
  handleEdit,
}) => {
  const dispatch = useAppDispatch();
  const [avatar, setAvatar] = useState(userData.avatar);
  const [biography, setBiography] = useState(userData.biography);
  const [cropAvatar, setCropAvatar] = useState(userData.avatar);
  const [backgroundFon, setBackgroundFon] = useState<any>(userData.backgroundFon);

  const handleSaveAvatar = (crop: string, originalImage: string) => { setCropAvatar(crop); setAvatar(originalImage) };
  const handleSaveBackground = (e: ChangeEvent<HTMLInputElement>) => e.target.files && setBackgroundFon(e.target.files[0]);

  const formik = useFormik({
    initialValues: setInitialValues(userData),
    onSubmit: (data, helper) => onSubmit({ ...data, id: userData.id, avatar: cropAvatar, backgroundFon, biography }, userData, helper, dispatch, handleEdit),
    validationSchema,
    enableReinitialize: true,
  });

  const userFields: [keyof UserCabinetTypes, string][] = filterFields(userData);

  return (
    <Portal>
      <UserForm onSubmit={formik.handleSubmit}>
        <div>
          <h3>Avatar</h3>
          <ImageCrop
            image={avatar}
            width={350}
            height={220}
            handleSavePhoto={handleSaveAvatar}
          />
        </div>

        {userFields.map(([key]: [keyof UserCabinetTypes, string]) => (
          <Input
            key={key}
            label={key}
            name={key}
            type={"text"}
            value={formik.values[key]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        ))}

        <input type="file" name="backgroundFon" onChange={handleSaveBackground} />

        <TextEditor
          name="biography"
          onChange={(str: string) => setBiography(str)}
          value={biography}
        />

        <ButtonWrapper>
          <Button type="submit" color="#fff">
            Save
          </Button>{" "}
          <Button type="submit" color="#fff" onClick={handleEdit} background="red">
            Cancel
          </Button>
        </ButtonWrapper>
      </UserForm>
    </Portal>
  );
};
