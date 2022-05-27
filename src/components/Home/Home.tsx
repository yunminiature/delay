import React, {FC, useState} from "react";
import GreetModal from "../GreetModal";
import SideMenu from "../SideMenu";
import styled from "styled-components";
import {useAppSelector} from "../../store";
import {selectUser, selectUsername} from "../../store/User/selectors";
import MainBoard from "../MainBoard";

const Home:FC = () => {

  const [username, setUsername] = useState(useAppSelector(selectUsername))
  const updateUsername = (username:string) => {
    setUsername(username)
  }

  const user = useAppSelector(selectUser)
  console.log(user)

  return(
    <HomePage>
      {
        username
        ? <SideMenu/>
        : <GreetModal updateUsername={updateUsername}/>
      }

      <MainBoard/>
    </HomePage>
  )
}

const HomePage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 20px;
  font-family: Arial;
`

export default Home