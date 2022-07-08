import { useFormik } from "formik";
import { MainTitle } from "styles/typography/styles";
import { LoginSection, Form } from "./styles";
import { initialValues, validationSchema, onSubmit } from "./const";
import { Input } from "models/input";
import { Button } from "models/button/styles";

export const LoginPage = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <LoginSection>
      <MainTitle>Login</MainTitle>
      <Form onSubmit={formik.handleSubmit}>
        <Input
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
    </LoginSection>
  );
};
