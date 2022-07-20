import { AuthorizedUser } from "types";

export type UpdateUserModalTypes = {
  data: AuthorizedUser;
  handleEdit: () => void;
};