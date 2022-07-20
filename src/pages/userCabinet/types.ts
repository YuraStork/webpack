import { AuthorizedUser } from "types";

export type UserCabinetTypes = Omit<AuthorizedUser, "id" | "role" | "email" | "avatar" | "backgroundFon">
export type InitialStateTypes = {
  name: string
  country: string
  city: string
  age: string
  color: string
  gender: string
  biography: string
  date: string
}