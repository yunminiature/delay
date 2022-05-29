import {FC} from "react";
import styled from "styled-components";

interface DefaultBoardProps{
  children: React.ReactNode
}

const DefaultBoard:FC<DefaultBoardProps> = ({children}) => {
  return(
    <Board>
      {children}
    </Board>
  )
}

const Board = styled.div`
  flex-grow: 2;
  max-width: calc(100% - 360px);
  min-height: 700px;
  margin-left: 20px;
  border-radius: 15px;
  background-color: rgba(253, 232, 215, 0.4);
`

export default DefaultBoard