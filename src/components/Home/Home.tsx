import React, {FC, useState} from "react";
import GreetModal from "../GreetModal";
import SideMenu from "../SideMenu";
import styled from "styled-components";
import {useAppSelector} from "../../store";
import {selectUsername} from "../../store/User/selectors";
import ProjectsBoard from "../ProjectsBoard";
import MainBoard from "../MainBoard";

export const enum Menu{
  MAIN = "MAIN",
  SPRINTS = "SPRINTS",
  PROJECTS = "PROJECTS",
  NOTES = "NOTES"
}

const Home:FC = () => {

  const [username, setUsername] = useState(useAppSelector(selectUsername))
  const updateUsername = (username:string) => {
    setUsername(username)
  }

  const [activeScreen, setActiveScreen] = useState(Menu.MAIN)
  const changeActiveScreen = (screen:Menu) => {
    setActiveScreen(screen)
  }

  const menuScreenMapping = {
    MAIN: <MainBoard/>,
    SPRINTS: <MainBoard/>,
    PROJECTS: <ProjectsBoard/>,
    NOTES: <MainBoard/>
  }

  return(
    <HomePage>
      {
        username
        ? <SideMenu changeActiveScreen={changeActiveScreen}/>
        : <GreetModal updateUsername={updateUsername}/>
      }

      {menuScreenMapping[activeScreen]}
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