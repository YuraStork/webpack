export interface UserLoginFormData {
  email: string;
  password: string;
}
export interface UserRegistrationData extends UserLoginFormData {
  name: string;
  age: number;
}
export interface AuthorizedUser {
  id: string | null;
  name: string | null;
  age: number | null;
  role: string | null;
  email: string | null;
  country: string | null;
  city: string | null;
  color: string | null;
  gender: string | null;
  date: string | null;
  biography: string | null;
}
export interface SavedUserObject {
  token: string;
  user: Pick<AuthorizedUser, "name" | "role" | "id">;
}

export interface AuthContextTypes {
  isAuth: boolean;
  isReady: boolean;
  userData: SavedUserObject;
  login: (data: UserLoginFormData) => void;
  logout: () => void;
  isLoading: boolean;
}

export interface PokemonShortData {
  name: string
  url: string
}
export interface PokemonsResponse {
  count: number
  next: any
  previous: any
  results: PokemonShortData[]
}

