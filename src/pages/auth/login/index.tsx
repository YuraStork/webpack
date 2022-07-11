import { useFormik } from "formik";
import { MainTitle } from "styles/typography/styles";
import { AuthSection, Form, FormWrapper } from "../styles";
import { initialValues, validationSchema, onSubmit } from "./const";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "context/auth.context";
import { Input } from "components/content-wrapper/input";
import { Button } from "components/button/styles";
import { Portal } from "utils/portal";
import { Loader } from "components/loader";

export const LoginPage = () => {
  const { login, isLoading } = useContext(AuthContext);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (data: any, helper: any) => onSubmit(data, helper, login),
  });

  return (
    <AuthSection>
      <FormWrapper>
        <MainTitle>Login</MainTitle>
        <Form onSubmit={formik.handleSubmit}>
          <Input
            disabled={isLoading}
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
            disabled={isLoading}
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
            disabled={!formik.isValid || !formik.dirty || isLoading}
          >
            Send
          </Button>
        </Form>
        <Link to="/registration">Sing up</Link>
      </FormWrapper>

      {isLoading && <Portal><Loader/></Portal>}
    </AuthSection>
  );
};
