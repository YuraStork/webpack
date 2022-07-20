import { Button } from "components/button/styles";
import { ImageCrop } from "components/image-crop";
import { Input } from "components/input";
import { TextEditor } from "components/textEditor";
import { useFormik } from "formik";
import { ChangeEvent, FC, useCallback, useState } from "react";
import { useAppDispatch } from "store/store";
import {
  getUserProfileThunk,
  updateUserProfileThunk,
} from "store/thunks/user.thunk";
import { Portal } from "utils/portal";
import { filterFields, setInitialValues, validationSchema } from "../const";
import { UserForm, ButtonWrapper } from "./styles";
import { InitialStateTypes, UserCabinetTypes } from "../types";
import { UpdateUserModalTypes } from "./types";
import { createBlobFile } from "utils/encodeBase64";


export const UpdateUserModal: FC<UpdateUserModalTypes> = ({
  data,
  handleEdit,
}) => {
  const dispatch = useAppDispatch();
  const [avatar, setAvatar] = useState(data.avatar);
  const [biography, setBiography] = useState(data.biography || "");
  const [cropAvatar, setCropAvatar] = useState(data.avatar);
  const [backgroundFon, setBackgroundFon] = useState<any>();

  const handleSaveAvatar = useCallback((crop: string, originalImage: string) => { setCropAvatar(crop); setAvatar(originalImage) }, []);
  const handleSaveBackground = (e: ChangeEvent<HTMLInputElement>) => e.target.files && setBackgroundFon(e.target.files[0]);

  const formik = useFormik({
    initialValues: setInitialValues(data),
    onSubmit: async (profile, helper) => {
      const formdata = new FormData();
      const keys: any[] = Object.keys(profile);
      keys.map((key: keyof InitialStateTypes) => formdata.append(key, profile[key]))
      formdata.append("id", data.id);
      formdata.append("backgroundFon", backgroundFon);
      const file = await createBlobFile(cropAvatar, "image", "image/png");
      formdata.append("avatar", file);

      dispatch(
        updateUserProfileThunk(formdata)
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
            value={formik.values[key] || ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        ))}

        <input type="file" name="backgroundFon" onChange={handleSaveBackground} />
        
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
