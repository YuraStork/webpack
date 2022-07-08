export interface UserLoginData {
  email: string;
  password: string
}
export interface UserRegistrationData extends UserLoginData{
  name: string
} 