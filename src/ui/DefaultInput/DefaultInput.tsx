import {FC, InputHTMLAttributes} from "react";
import styled from "styled-components";
import {colors} from "../../styles/colors";

interface DefaultInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  valid: "undefined"|"valid"|"invalid";
  invalidText?: string;
}

const DefaultInput:FC<DefaultInputProps> = ({label, type, value, valid, invalidText, onChange}) => {
  return(
    <InputArea>
      <InputLabel>{label}</InputLabel>
      <Input type={type} value={value} onChange={onChange} valid={valid}/>
      {
        invalidText &&
        <InputInvalidMessage>
          {invalidText}
        </InputInvalidMessage>
      }
    </InputArea>
  )
}

const InputArea = styled.div`
  margin: 0 0 25px;
`
const InputLabel = styled.p`
  margin: 0 0 5px;
  padding: 0 0 0 11px;
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  color: ${colors.gray};
`
const Input = styled.input<{valid:"undefined"|"valid"|"invalid"}>`
  width: 300px;
  padding: 5px 10px;
  border: 1.5px solid ${props => (props.valid !== "undefined") ? ((props.valid === "valid") ? "yellowgreen" : "tomato") : colors.white};
  border-radius: 10px;
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  color: ${colors.gray};

  &:focus{
    outline: none;
  }
`
const InputInvalidMessage = styled.p`
  position: absolute;
  margin: 2px 0 0;
  padding: 0 0 0 11px;
  width: 300px;
  font-weight: 300;
  line-height: 20px;
  font-size: 12px;
  color: tomato;
  
`

export default DefaultInput