import {ButtonHTMLAttributes, FC} from "react";
import styled from "styled-components";
import {colors} from "../../styles/colors";

interface DefaultButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{

}

const DefaultButton:FC<DefaultButtonProps> = ({type, onClick, disabled, value}) => {
  return(
    <Button type={type} onClick={onClick} disabled={disabled}>
      {value}
    </Button>
  )
}

const Button = styled.button`
  margin: 15px 0 0;
  width: 320px;
  padding: 7px 10px;
  border: 0;
  border-radius: 10px;
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  color: ${colors.white};
  background-color: ${colors.gray};
  cursor: pointer;
  
  &:disabled{
    background-color: rgba(64, 64, 64, 0.6);
    cursor: auto;
  }
`

export default DefaultButton