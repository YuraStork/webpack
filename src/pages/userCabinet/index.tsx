import { Button } from "components/button/styles";
import { Container } from "components/container/styles";
import { Input } from "components/input";
import { AuthContext } from "context/auth.context";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { MainTitle } from "styles/typography/styles";
import { UserCabinetSection, UserForm } from "./styles";
import { setInitialValues, onSubmit, validationSchema } from "./const"
import { User } from "types";

export const UserCabinet = () => {
  const [editMode, setEditMode] = useState(false);
  const { userData } = useContext(AuthContext);
  const handleEdit = () => setEditMode(!editMode);
  const userFields: any = Object.entries(userData!.user).filter(([key, value]) => key !== "_id" && key !== "role" && key !== "email");

  const formik = useFormik({
    initialValues: setInitialValues(userData!.user),
    onSubmit,
    validationSchema,
    enableReinitialize: true
  })

  return (
    <UserCabinetSection>
      <Container>
        <MainTitle>Cabinet</MainTitle>
        {editMode ? (
          <UserForm onSubmit={formik.handleSubmit}>
            {
              userFields.map(([key, value]: any) => (
                <Input key={key} label={key} name={key} type="text" value={formik.values[key]} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              ))
            }
            <Button type="submit">Save</Button>
          </UserForm>
        ) : (
          <ul>
            {
              userFields.map((p: any) => (
                <li key={p[0]}>{p[0]}: {p[1]}</li>
              ))
            }
          </ul>
        )}
        {
          !editMode && <div>
            <Button onClick={handleEdit}>Edit</Button>
          </div>
        }

      </Container>
    </UserCabinetSection>
  );
};
