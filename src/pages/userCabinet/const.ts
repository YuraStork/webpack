import { updateUserData } from "api/user.api";
import * as yup from "yup";
import { UserCabinetTypes } from "./types";

const defaultUserValues = {
  name: "",
  country: "",
  city: "",
  age: "",
  color: "",
  gander: "",
  biography: "",
  date: ""
}
const setInitialValues = (data: UserCabinetTypes | null) => ({
  name: data?.name || "",
  country: data?.country || "",
  city: data?.city || "",
  age: data?.age || "",
  color: data?.color || "",
  gander: data?.gander || "",
  biography: data?.biography || "",
  date: data?.date || ""
})

const validationSchema = yup.object().shape({
  name: yup.string().min(2, "min 2"),
  age: yup.string(),
  country: yup.string(),
  city: yup.string(),
  color: yup.string(),
  gander: yup.string(),
  biography: yup.string(),
  date: yup.date()
})

const onSubmit = async ({ id, handleEdit, ...data }: any, helper: any) => {
  const requestBody = Object.fromEntries(Object.entries(data).filter(([key, value]) => value));
  const res = await updateUserData({ ...data, id });
  handleEdit();
  console.log(requestBody);
}

export { setInitialValues, validationSchema, onSubmit, defaultUserValues }