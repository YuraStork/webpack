import { FC, useState } from "react";
import { DropDownContainer } from "./styles";

type DropDownTypes = {
  list: string[]
}

export const DropDown: FC<DropDownTypes> = ({ list }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);
  return <DropDownContainer isOpen={isOpen}>
    <div onClick={handleOpen}>{isOpen ? "close" : "open"}</div>
    {isOpen && <div>
      {list.map(label => <div key={label}>{label}</div>)}

    </div>}
  </DropDownContainer>
} 