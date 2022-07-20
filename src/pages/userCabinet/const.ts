import { AuthorizedUser } from "types";
import * as yup from "yup";
import { InitialStateTypes, UserCabinetTypes } from "./types";

const defaultUserValues = {
  name: "",
  country: "",
  city: "",
  age: "",
  color: "",
  gender: "",
  biography: "",
  date: "",
};



const setInitialValues = (data: AuthorizedUser): InitialStateTypes => ({
  name: data.name,
  country: data.country,
  city: data.city,
  age: data.age || "18",
  color: data.color,
  gender: data.gender,
  biography: data.biography,
  date: data.date,
});

const validationSchema = yup.object().shape({
  name: yup.string().min(2, "min 2"),
  age: yup.string(),
  country: yup.string(),
  city: yup.string(),
  color: yup.string(),
  gander: yup.string(),
  biography: yup.string(),
  date: yup.date(),
});

const filterFields = (
  userFields: AuthorizedUser
): [keyof UserCabinetTypes, string][] => {
  const res = Object.entries(userFields).filter(
    ([key, value]) =>
      key !== "id" &&
      key !== "role" &&
      key !== "email" &&
      key !== "biography" &&
      key !== "avatar" &&
      key !== "backgroundFon"
  ) as [keyof UserCabinetTypes, string][];
  return res;
};

const setInputTypes = (name: string) => {
  switch (name) {
    case "date": return "date";
    case "age": return "number";
    case "gender": return "radio";
    default: return "text";
  }
}
export { setInitialValues, validationSchema, defaultUserValues, filterFields, setInputTypes };
