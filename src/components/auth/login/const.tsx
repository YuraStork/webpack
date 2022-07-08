import { handleAuthorization } from 'api/user.api';
import { FormikHelpers } from 'formik';
import { UserLoginData } from 'types';
import { cryptoSha256 } from 'utils/cryptoPassord';
import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  email: yup.string().email("Not valid email").required("Required"),
  password: yup.string().min(6, "min 6").required("Required"),
})

export const initialValues: UserLoginData = {
  email: '',
  password: ''
}

export const onSubmit = (data: UserLoginData, formikHelper: any): void => {
  const password = cryptoSha256(data.password);
  handleAuthorization({ ...data, password });
  formikHelper.resetForm();
}