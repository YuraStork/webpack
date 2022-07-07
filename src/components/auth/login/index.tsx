import { useFormik } from "formik";
import { MainTitle } from "styles/typography/styles";
import { LoginSection } from "./styles";
import { initialValues, validationSchema, onSubmit } from "./const";
import { Input } from "models/input";

export const LoginPage = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <LoginSection>
      <MainTitle>Login</MainTitle>
      <form onSubmit={formik.handleSubmit}>
        <Input
          label="Email"
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={(formik.errors.email && formik.touched.email) ? formik.errors.email : ''}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={(formik.errors.password && formik.touched.password) ? formik.errors.password : ''}
        />
        <button type="submit">send</button>
      </form>
    </LoginSection>
  );
};
