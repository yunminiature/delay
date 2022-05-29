import {FC, useState} from "react";
import {DefaultBoard} from "../../ui";
import {useAppDispatch, useAppSelector} from "../../store";
import {selectProjects} from "../../store/Projects/selectors";
import styled from "styled-components";
import ProjectCard from "../ProjectCard";
import {colors} from "../../styles/colors";
import {addProject, deleteProject, editProject} from "../../store/Projects/actions";
import {Project} from "../../store/Projects/types";

const ProjectsBoard:FC = () => {

  const dispatch = useAppDispatch()
  const projects = useAppSelector(selectProjects)

  const [isAddingProject, setIsAddingProject] = useState(false)
  const handleClick = () => {
    setIsAddingProject(!isAddingProject)
  }

  const editCard = (data:Project) => {
    dispatch(editProject(data))
  }
  const deleteCard = (id:number) => {
    dispatch(deleteProject(id))
  }
  const addCard = (data:Project) => {
    dispatch(addProject(data))
  }

  return(
    <DefaultBoard>
      <ProjectsList>
        {
          projects.map(project =>
            <ProjectCard key={project.id} id={project.id} title={project.title} goBack={handleClick} editCard={editCard} deleteCard={deleteCard} addCard={addCard}/>
          )
        }
        {
          isAddingProject
            ? <ProjectCard key={projects.length} id={projects.length} title={""} goBack={handleClick} editCard={editCard} deleteCard={deleteCard} addCard={addCard}/>
            : <ProjectButton onClick={handleClick}>
                <p>+</p>
              </ProjectButton>
        }
      </ProjectsList>
    </DefaultBoard>
  )
}

const ProjectsList = styled.ul`
  list-style: none;
  margin: 20px 0 0 50px;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`
const ProjectButton = styled.li`
  width: 300px;
  height: 200px;
  margin: 0 50px 20px 0;
  border-radius: 10px;
  background-color: ${colors.antique};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  p{
    margin: 0;
    font-weight: 400;
    line-height: 120px;
    font-size: 120px;
    color: ${colors.white};
  }
`

export default ProjectsBoard