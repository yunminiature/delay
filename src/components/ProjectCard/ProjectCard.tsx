import {FC, useState} from "react";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import styled from "styled-components";
import {colors} from "../../styles/colors";
import {Back, Delete, Edit} from "../../ui/Icons";
import {Project} from "../../store/Projects/types";
import ProjectTasks from "../ProjectTasks";

interface ProjectCardProps extends Project{
  goBack: () => void,
  editCard: (data:Project) => void,
  deleteCard: (id:number) => void,
  addCard: (data:Project) => void
}

interface Title{
  title: string
}

const ProjectCard:FC<ProjectCardProps> = ({id, title, sprints, goBack, editCard, deleteCard, addCard}) => {

  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleClickBack = () => {
    title
    ? setIsEdit(!isEdit)
    : goBack()
  }
  const handleClickDelete = () => {
    deleteCard(id)
  }

  const [isEdit, setIsEdit] = useState(false)
  const handleClickEdit = () => {
    setIsEdit(!isEdit)
  }
  const {handleSubmit, control} = useForm<Title>({defaultValues:{title:title}})
  const onSubmit: SubmitHandler<Title> = data =>{
    if (title) {
      editCard({
        id,
        title: data.title,
        sprints
      })
      setIsEdit(!isEdit)
    }
    else{
      addCard({
        id,
        title: data.title,
        sprints: []
      })
    }

  }

  return(
    <>
      {
        isOpen
        && <ProjectScreen>
            <ProjectScreenArea>
              <ProjectScreenButton type="button" onClick={handleClick}>
                <Back height="25px"/>
              </ProjectScreenButton>
              <ProjectScreenTitle>
                {title}
              </ProjectScreenTitle>
              <ProjectTasks projectId={id} sprints={sprints}/>
            </ProjectScreenArea>
           </ProjectScreen>
      }
      <ProjectCardArea onClick={handleClick}>
        <ProjectPreview>
          {
            (title && !isEdit)
              ? <>
                <ProjectButton type="button" onClick={handleClickDelete}>
                  <Delete height="25px"/>
                </ProjectButton>
                <ProjectButton type="button" onClick={handleClickEdit}>
                  <Edit height="22px"/>
                </ProjectButton>
              </>
              : <ProjectButton type="button" onClick={handleClickBack}>
                <Back height="25px"/>
              </ProjectButton>
          }

        </ProjectPreview>
        {
          (title && !isEdit)
            ? <ProjectTitle>
              {title}
            </ProjectTitle>
            : <ProjectInputArea onSubmit={handleSubmit(onSubmit)}>
              <Controller
                control={control}
                name="title"
                rules={{
                  required:"Обязательное поле"
                }}
                render={({field:{onChange, value}}) => (
                  <ProjectInput
                    type="text"
                    value={value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      onChange(e.target.value);
                    }}
                  />
                )}
              />
              <ProjectInputButton type="submit">
                <Edit height="22px"/>
              </ProjectInputButton>
            </ProjectInputArea>
        }
      </ProjectCardArea>
    </>

  )
}

const ProjectCardArea = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 300px;
  height: 200px;
  margin: 0 50px 20px 0;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${colors.antique};
  cursor: pointer;
`
const ProjectPreview = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 15px;
  background-color: ${colors.white};
`
const ProjectButton = styled.button`
  margin: 0 0 5px;
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  
  svg{
    fill: ${colors.light_gray};
  }
  
  &:hover{
    svg{
      fill: ${colors.gray};
    }
  }
`
const ProjectTitle = styled.h3`
  margin: 0;
  padding: 20px;
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  color: ${colors.gray};
  background-color: ${colors.antique};
`
const ProjectInputArea = styled.form`
  position: relative;
`
const ProjectInput = styled.input`
  margin: 20px;
  padding: 5px 30px 5px 10px;
  width: calc(100% - 80px);
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  color: ${colors.gray};
  border: 0;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  &:focus{
    outline: none;
  }
`
const ProjectInputButton = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;

  svg{
    fill: ${colors.light_gray};
  }

  &:hover{
    svg{
      fill: ${colors.gray};
    }
  }
`
const ProjectScreen = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 20px;
  left: 380px;
  width: calc(100vw - 400px);
  height: calc(100vh - 40px);
  border-radius: 10px;
  background-color: rgba(200, 200, 200, 0.3);
`
const ProjectScreenArea = styled.div`
  width: 75%;
  height: 70%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background-color: ${colors.white};
`
const ProjectScreenButton = styled.button`
  margin: 0 auto 0 0;
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;

  svg{
    fill: ${colors.light_gray};
  }

  &:hover{
    svg{
      fill: ${colors.gray};
    }
  }
`
const ProjectScreenTitle = styled.h2`
  margin: 10px 0 0 10px;
  font-weight: 700;
  line-height: 32px;
  font-size: 28px;
  color: ${colors.gray};
`

export default ProjectCard