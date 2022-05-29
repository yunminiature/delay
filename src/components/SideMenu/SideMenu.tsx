import {FC} from "react";
import styled from "styled-components";
import {colors} from "../../styles/colors";
import {useAppSelector} from "../../store";
import {selectUser} from "../../store/User/selectors";
import {GenderTypes} from "../../store/User/types";
import {Menu} from "../Home/Home";

interface SideMenuProps{
  changeActiveScreen: (screen:Menu) => void
}

const SideMenu:FC<SideMenuProps> = ({changeActiveScreen}) => {

  const {username, gender} = useAppSelector(selectUser)

  const handleClick = (screen:Menu) => {
    return function (){
      changeActiveScreen(screen)
    }
  }

  return(
    <MenuArea>
      <MenuProfile>
        <MenuProfileImage gender={gender}/>
        <MenuProfileName>
          {username}
        </MenuProfileName>
      </MenuProfile>

      <MenuList>
        <MenuItem onClick={handleClick(Menu.MAIN)} img={gender === GenderTypes.MAN ? `${require("../../ui/Emoji/man-laptop.png")}` : `${require("../../ui/Emoji/laptop.png")}`}>
          <MenuItemText>Главная</MenuItemText>
        </MenuItem>
        <MenuItem onClick={handleClick(Menu.SPRINTS)} img={`${require("../../ui/Emoji/fire.png")}`}>
          <MenuItemText>Текущие спринты</MenuItemText>
        </MenuItem>
        <MenuItem onClick={handleClick(Menu.PROJECTS)} img={`${require("../../ui/Emoji/bookmark.png")}`}>
          <MenuItemText>Мои проекты</MenuItemText>
        </MenuItem>
        <MenuItem onClick={handleClick(Menu.NOTES)} img={`${require("../../ui/Emoji/pencil.png")}`}>
          <MenuItemText>Мои заметки</MenuItemText>
        </MenuItem>
      </MenuList>

      <MenuInput placeholder="Добавить заметку..."/>
    </MenuArea>
  )
}

const MenuArea = styled.div`
  width: 340px;
  height: 620px;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  background-color: rgba(253, 232, 215, 0.4);
`
const MenuProfile = styled.div`
`
const MenuProfileImage = styled.div<{gender: GenderTypes}>`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: ${colors.antique} url(${props => (props.gender === GenderTypes.MAN)
    ? `${require("../../ui/Emoji/man.png")}`
    : `${require("../../ui/Emoji/woman.png")}`}) no-repeat center;
  background-size: 65%;
`
const MenuProfileName = styled.div`
  width: 100%;
  margin: 14px 0 0;
  text-align: center;
  font-weight: 700;
  line-height: 24px;
  font-size: 20px;
  color: ${colors.gray};
`
const MenuList = styled.ul`
  margin: 40px 0 0;
  padding: 0;
  width: 100%;
  list-style: none;
`
const MenuItem = styled.li<{img: string}>`
  width: calc(100% - 120px);
  padding: 12px 80px 12px 40px;
  background: url(${props => props.img}) no-repeat 20px;
  background-size: 7%;
  cursor: pointer;
  
  &:hover{
    background-color: ${colors.antique};
  }
`
const MenuItemText = styled.p`
  margin: 0 0 0 20px;
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  color: ${colors.gray};
`
const MenuInput = styled.textarea`
  width: calc(100% - 80px);
  height: 140px;
  margin: 40px 0 0;
  padding: 20px;
  border: 0;
  border-radius: 15px;
  resize: none;
  font-weight: 500;
  line-height: 20px;
  font-size: 16px;
  color: ${colors.gray};

  &::placeholder{
    color: ${colors.light_gray};
  }

  &:focus{
    outline: none;
  }
`

export default SideMenu