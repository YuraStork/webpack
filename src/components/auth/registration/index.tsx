import { useFormik } from "formik";
import { MainTitle } from "styles/typography/styles";
import { AuthSection, Form, FormWrapper } from "../styles";
import { initialValues, validationSchema, onSubmit } from "./const";
import { Input } from "models/input";
import { Button } from "models/button/styles";
import { Link } from "react-router-dom";

export const RegistrationPage = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <AuthSection>
      <MainTitle>Registration</MainTitle>
      <FormWrapper >
        <Form onSubmit={formik.handleSubmit}>
          <Input
            margin="5px 0px 0px 0px"
            label="Name"
            name="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors.name && formik.touched.name
                ? formik.errors.name
                : ""
            }
          />

          <Input
            margin="5px 0px 0px 0px"
            label="Email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors.email && formik.touched.email
                ? formik.errors.email
                : ""
            }
          />
          <Input
            margin="5px 0px 0px 0px"
            label="Password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors.password && formik.touched.password
                ? formik.errors.password
                : ""
            }
          />
          <Button
            type="submit"
            margin="10px 0px 0px 0px"
            color="#fff"
            disabled={!formik.isValid || !formik.dirty}
          >
            Send
          </Button>
        </Form>
        <Link to='/login'>Sing in</Link>
      </FormWrapper >
    </AuthSection>
  );
};
