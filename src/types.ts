export interface UserLoginData {
  email: string;
  password: string
}
export interface UserRegistrationData extends UserLoginData {
  name: string
  age: number
}
export interface UserData {
  token: string,
  user: {
    id: string,
    name: string,
    role: string
  }
}