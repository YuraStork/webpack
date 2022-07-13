export interface UserLoginData {
  email: string;
  password: string;
}
export interface UserRegistrationData extends UserLoginData {
  name: string;
  age: number;
}

// export enum UserKeys {
//   _id = "_id",
//   name = "name",
//   role = "role",
//   email = "email",
//   country = "country",
//   city = "city",
//   color = "color",
//   gander = "gander",
//   biography = "biography",
//   date = "date",
// }
// export interface User {
//   [UserKeys._id]: string;
//   [UserKeys.name]: string;
//   [UserKeys.role]: string;
//   [UserKeys.email]: string;
//   [UserKeys.country]: string;
//   [UserKeys.city]: string;
//   [UserKeys.color]: string;
//   [UserKeys.gander]: string;
//   [UserKeys.biography]: string;
//   [UserKeys.date]: string;
// }
export interface User {
  _id: string;
  name: string;
  age: string;
  role: string;
  email: string;
  country: string;
  city: string;
  color: string;
  gander: string;
  date: string;
  biography: string;
}
export interface UserData {
  token: string;
  user: User;
}

export interface AuthContextTypes {
  isAuth: boolean;
  isReady: boolean;
  userData: UserData | null;
  login: (data: UserLoginData) => void;
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

