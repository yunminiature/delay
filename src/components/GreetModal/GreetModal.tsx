import {FC, useState} from "react";
import styled from "styled-components";
import {colors} from "../../styles/colors";
import SignUpForm from "../SignUpForm";
import SignInForm from "../SignInForm";

const enum FormStatusType {
  SIGN_UP = "SIGN_UP",
  SIGN_IN = "SIGN_IN"
}

interface GreetModalProps{
  updateUsername: (username:string) => void
}

const GreetModal:FC<GreetModalProps> = ({updateUsername}) => {

  const [formStatus, setFormStatus] = useState(FormStatusType.SIGN_UP)
  const handleClick = (status:FormStatusType) => {
    return function (){
      setFormStatus(status)
    }
  }

  const authFormMapping = {
    SIGN_UP: <SignUpForm updateUsername={updateUsername}/>,
    SIGN_IN: <SignInForm updateUsername={updateUsername}/>
  }

  return(
    <Modal>
      <AboutModal>
        <AboutTitle>
          Что такое delay?
        </AboutTitle>
        <AboutDescription>
          Привет! <img src={require("../../ui/Emoji/hand.png")} alt="hello" width="25px"/><br/><br/>
          Delay — приложение, которое поможет вам управлять личными задачами или групповыми проектами, используя
          различные техники Agile и Scrum.<br/><br/>
          Создавайте проекты, ставьте задачи, распределяйте их в беклоге в зависимости от приоритета, проводите
          ретроспективу спринтов и многое другое.<br/><br/>
          Delay — учебный проект. Если у вас есть замечания или предложения, пожалуйста, <AboutLink href={"/"}>напишите мне</AboutLink>
        </AboutDescription>
      </AboutModal>

      <AuthModalBackground>
        <AuthModal>
          <AuthModalMenu>
            <AuthModalMenuItem isActive={formStatus === FormStatusType.SIGN_UP} onClick={handleClick(FormStatusType.SIGN_UP)}>
              Регистрация
            </AuthModalMenuItem>
            <AuthModalMenuItem isActive={formStatus === FormStatusType.SIGN_IN} onClick={handleClick(FormStatusType.SIGN_IN)}>
              Авторизация
            </AuthModalMenuItem>
          </AuthModalMenu>

          {authFormMapping[formStatus]}
        </AuthModal>
      </AuthModalBackground>
    </Modal>
  )
}

const Modal = styled.div`
  position: absolute;
  width: calc(100% - 40px);
  display: flex;
  flex-direction: row;
  
`
const AboutModal = styled.div`
  width: 340px;
  height: 620px;
  padding: 60px 0 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  background-color: ${colors.antique};
`
const AboutTitle = styled.h2`
  margin: 0 0 40px;
  padding: 0 40px;
  font-weight: 700;
  line-height: 32px;
  font-size: 30px;
  color: ${colors.gray};
`
const AboutDescription = styled.p`
  margin: 0;
  padding: 0 40px;
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  color: ${colors.gray};
`
const AboutLink = styled.a`
  color: ${colors.gray};
  padding-right: 32px;
  background: url(${require("../../ui/Emoji/message.png")}) no-repeat right;
  background-size: 17%;
`
const AuthModalBackground = styled.div`
  flex-grow: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
`
const AuthModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  height: 440px;
  padding: 40px;
  background-color: ${colors.antique};
  border-radius: 15px;
`
const AuthModalMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 5px;
  border-radius: 10px;
  background-color: ${colors.white};
`
const AuthModalMenuItem = styled.p<{isActive:boolean}>`
  margin: 2px;
  padding: 5px;
  width: 46%;
  text-align: center;
  font-weight: 700;
  line-height: 24px;
  font-size: 18px;
  border-radius: 5px;
  background-color: ${props => props.isActive ? colors.gray : colors.white};
  color: ${props => props.isActive ? colors.white : colors.gray};
  cursor: pointer;
`


export default GreetModal