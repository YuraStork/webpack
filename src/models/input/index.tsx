import { FC } from "react"
import { InputWrapper } from "./styles"

type InputProps = {
  type: string,
  label: string,
  value: string | number,
  name: string,
  error?: string,
  id?: string,
  onChange?: (e: any) => void,
  onBlur?: (e: any) => void,
}

export const Input: FC<InputProps> = ({ label, ...rest }) => {
  return <InputWrapper isError={!!rest.error} hasValue={!!rest.value}>
    <input {...rest} />
    <label>{label}</label>
  </InputWrapper>
}