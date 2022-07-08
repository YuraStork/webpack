import { FC, useState } from "react"
import { InputWrapper } from "./styles"
import View from '../../../public/assets/view.png';

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
  const [type, setType] = useState(rest.type || 'text');
  const handleChangeType = () => setType(type === 'password' ? "text" : rest.type)
  const isShow = type === 'password';
  return <InputWrapper isError={!!rest.error} hasValue={!!rest.value}>
    <input {...rest} type={type} />
    <label>{label}</label>
    {rest.type === 'password' && <button onClick={handleChangeType} type="button">
      <img src={View} alt="" width={10} height={10} />
    </button>}
  </InputWrapper>
}