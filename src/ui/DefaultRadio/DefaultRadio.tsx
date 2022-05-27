import {FC, InputHTMLAttributes} from "react";
import styled from "styled-components";
import {colors} from "../../styles/colors";

interface DefaultRadioProps extends InputHTMLAttributes<HTMLInputElement>{
  label?: string
}

const DefaultRadio:FC<DefaultRadioProps> = ({label, id, value, checked, onClick}) => {
  return(
    <Radio onClick={onClick}>
      <RadioInput type="radio" id={id} value={value} checked={checked}/>
      <StyledInput checked={checked}/>
      <RadioLabel>{label}</RadioLabel>
    </Radio>
  )
}

const Radio = styled.div`
  margin: 0 0 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`
const RadioInput = styled.input`
  display: none;
`
const StyledInput = styled.div<{checked:boolean|undefined}>`
  height: 12px;
  width: 12px;
  border-radius: 10px;
  border: 4px solid ${colors.white};
  background-color: ${props => props.checked ? colors.gray : colors.white};
`
const RadioLabel = styled.label`
  margin: 0 0 0 10px;
  cursor: pointer;
`

export default DefaultRadio