import {FC, useState} from "react";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {GenderTypes, User} from "../../store/User/types";
import styled from "styled-components";
import {colors} from "../../styles/colors";
import {DefaultButton, DefaultInput, DefaultRadio} from "../../ui";
import {EMAIL_REGEX, PASSWORD_REGEX, USERNAME_REGEX} from "../../constants";
import {useAppDispatch} from "../../store";
import {signUp} from "../../store/User/actions";

const enum FormStepTypes {
  REGISTER = "REGISTER",
  PERSONALIZATION = "PERSONALIZATION"
}

interface SignUpFormProps{
  updateUsername: (username:string) => void
}

const SignUpForm:FC<SignUpFormProps> = ({updateUsername}) => {

  const dispatch = useAppDispatch()

  const [formStep, setFormStep] = useState(FormStepTypes.REGISTER)
  const handleClick = () => {
    formStep === FormStepTypes.REGISTER
    ? setFormStep(FormStepTypes.PERSONALIZATION)
    : setFormStep(FormStepTypes.REGISTER)
  }

  const [gender, setGender] = useState(GenderTypes.MAN)
  const changeGender = (gender: GenderTypes) => {
    return function(){
      setGender(gender)
    }
  }

  const {handleSubmit, control, formState: {errors, isValid}} = useForm<Omit<User, "gender">>(
    {
      defaultValues: {
        email: "",
        username: "",
        password:""
      },
      mode: "onChange"
    }
  )
  const onSubmit: SubmitHandler<Omit<User, "gender">> = data =>{
    const {email, username, password} = data
    dispatch(signUp({
      email,
      username,
      password,
      gender
    }))
    updateUsername(username)
  }

  return(
    <>
      <SignUpFormArea onSubmit={handleSubmit(onSubmit)}>

        {
          formStep === FormStepTypes.REGISTER &&
          <SignUpRegisterForm>
            <Controller
              control={control}
              name="email"
              rules={{
                pattern: {
                  value: EMAIL_REGEX,
                  message:"Некорректный адрес электронной почты"
                },
                required:"Это обязательное поле"
              }}
              render={({field:{onChange, value}}) => (
                <DefaultInput
                  label="почта"
                  type="text"
                  value={value}
                  valid={(!errors?.email && value!== "") ? "valid" : value!== "" ? "invalid" : "undefined"}
                  invalidText={errors?.email?.message}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    onChange(e.target.value);
                  }}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              rules={{
                pattern: {
                  value: PASSWORD_REGEX,
                  message:"Пароль содержит 8-20 латинских или кириллических символов и один из спец.символов: !@#$%"
                },
                required:"Это обязательное поле"
              }}
              render={({field:{onChange, value}}) => (
                <DefaultInput
                  label="пароль"
                  type="password"
                  value={value}
                  valid={(!errors?.password && value!== "") ? "valid" : value!== "" ? "invalid" : "undefined"}
                  invalidText={errors?.password?.message}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    onChange(e.target.value);
                  }}
                />
              )}
            />

            <DefaultButton type="button" onClick={handleClick} value="Далее" disabled={!isValid}/>
          </SignUpRegisterForm>
        }
        {
          formStep === FormStepTypes.PERSONALIZATION &&
          <SignUpPersonalizationForm>
            <SignUpPersonalizationProfile gender={gender}/>

            <SignUpPersonalizationGender>
              <p>пол</p>
              <DefaultRadio id="man" value={GenderTypes.MAN} checked={gender === GenderTypes.MAN} label="мужской" onClick={changeGender(GenderTypes.MAN)}></DefaultRadio>
              <DefaultRadio id="woman" value={GenderTypes.WOMAN} checked={gender === GenderTypes.WOMAN} label="женский" onClick={changeGender(GenderTypes.WOMAN)}></DefaultRadio>
            </SignUpPersonalizationGender>

            <Controller
              control={control}
              name="username"
              rules={{
                pattern: {
                  value: USERNAME_REGEX,
                  message:"Имя содержит 1-20 латинских или кириллических символов"
                },
                required:"Это обязательное поле"
              }}
              render={({field:{onChange, value}}) => (
                <DefaultInput
                  label="имя"
                  type="text"
                  value={value}
                  valid={(!errors?.username && value!== "") ? "valid" : value!== "" ? "invalid" : "undefined"}
                  invalidText={errors?.username?.message}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    onChange(e.target.value);
                  }}
                />
              )}
            />

            <DefaultButton type="submit" value="Далее" disabled={!isValid}/>
          </SignUpPersonalizationForm>
        }


      </SignUpFormArea>
    </>
  )
}

const SignUpFormArea = styled.form`
  margin: 10px 0 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SignUpRegisterForm = styled.div`
  margin: 60px 0 0;
`
const SignUpPersonalizationForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SignUpPersonalizationProfile = styled.div<{gender:GenderTypes}>`
  margin: 40px 0 0;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: ${colors.white} url(${props => (props.gender === GenderTypes.MAN)
  ? `${require("../../ui/Emoji/man.png")}`
  : `${require("../../ui/Emoji/woman.png")}`}) no-repeat center;
  background-size: 65%;
`
const SignUpPersonalizationGender = styled.div`
  margin: 10px auto 20px 0;
  p{
    margin: 0;
    padding: 0 0 0 11px;
    font-weight: 500;
    line-height: 24px;
    font-size: 18px;
    color: ${colors.gray};
  }
  display: flex;
  flex-direction: row;
  align-items: center;
`

export default SignUpForm