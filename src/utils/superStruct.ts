import { number, object, string } from "superstruct";

export const UserStructure = object({
  id: string(),
  name: string(),
  role: string(),
  exp: number(),
  iat: number()
})