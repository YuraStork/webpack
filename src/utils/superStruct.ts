import { number, object, string } from "superstruct";

export const UserTokenStructure = object({
  id: string(),
  name: string(),
  role: string(),
  exp: number(),
  iat: number()
})

export const UserDataStructure = object({
  id: string(),
  name: string(),
  age: number(),
  role: string(),
  email: string(),
  country: string(),
  city: string(),
  color: string(),
  gander: string(),
  biography: string(),
  date: string(),
})