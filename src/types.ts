export interface UserLoginData {
  email: string;
  password: string;
}
export interface UserRegistrationData extends UserLoginData {
  name: string;
  age: number;
}
export interface User {
  id: string;
  name: string;
  role: string;
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

