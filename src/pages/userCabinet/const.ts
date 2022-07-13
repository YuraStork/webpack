import { User } from "types";
import * as yup from "yup";

const setInitialValues = (data: User) => ({
  name: data.name || "",
  country: data.country || "",
  city: data.city || "",
  age: data.age || "",
  color: data.color || "",
  gander: data.gander || "",
  biography: data.biography || "",
  date: data.date || ""
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

type Data = Omit<User, "role" | "_id" | "email">

const onSubmit = (data: Data, helper: any) => {
  const requestBody = Object.fromEntries(Object.entries(data).filter(([key, value]) => value))
  console.log(requestBody);
}

export { setInitialValues, validationSchema, onSubmit }