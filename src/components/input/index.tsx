import { FC, useState } from "react"
import { InputWrapper, ErrorSpan } from "./styles"

type InputProps = {
  margin?: string,
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
  const [type, setType] = useState(rest.type || 'text');
  const handleChangeType = () => setType(type === 'password' ? "text" : rest.type)
  const isShow = type === 'password';
  return <InputWrapper isError={!!rest.error} hasValue={!!rest.value} margin={rest.margin}>
    <input {...rest} type={type} />
    <label>{label}</label>
    {!!rest.error && <ErrorSpan title={rest.error}></ErrorSpan>}
    {/* {rest.type === 'password' && <button onClick={handleChangeType} type="button">
      <img src={View} alt="" width={10} height={10} />
    </button>} */}
  </InputWrapper>
}