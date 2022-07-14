import { AuthorizedUser } from "types";

export type UserCabinetTypes = Omit<AuthorizedUser, "id" | "role" | "email">
