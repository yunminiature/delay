import {FC} from "react";
import styled from "styled-components";
import {colors} from "../../styles/colors";
import {useAppSelector} from "../../store";
import {selectTasks} from "../../store/Tasks/selectors";
import {Edit, Next} from "../../ui/Icons";

interface ProjectTasksProps{
  projectId: number,
  sprints: Array<number>
}

const ProjectTasks:FC<ProjectTasksProps> = ({projectId, sprints}) => {
  const tasks = useAppSelector(selectTasks)

  return(
    <>
      <ProjectDesk>
        <ProjectBacklog>
          <ProjectBacklogTitle>
            Беклог
          </ProjectBacklogTitle>
          <ProjectBacklogList>
            {
              tasks.map(task =>
                (task.projectId === projectId && task.id!==0) &&
                <ProjectBacklogItem>
                  <ProjectBacklogItemButton>
                    <Edit height="22px"/>
                  </ProjectBacklogItemButton>
                  <ProjectBacklogItemTitle>
                    {task.title}
                  </ProjectBacklogItemTitle>
                  {task.description &&
                    <ProjectBacklogItemDescription>
                      {task.description}
                    </ProjectBacklogItemDescription>
                  }
                </ProjectBacklogItem>
              )
            }
            <ProjectBacklogButton>
              +
            </ProjectBacklogButton>
          </ProjectBacklogList>
        </ProjectBacklog>

        <ProjectSprintsList>
          <ProjectSprintsTitle>
            Спринты
          </ProjectSprintsTitle>
          {
            sprints.map(sprint =>
              <ProjectSprintCard>
                <ProjectSprintCardTitle>
                  30.05-05.05
                </ProjectSprintCardTitle>
                <ProjectSprintCardButton>
                  <Next height="22px"/>
                </ProjectSprintCardButton>
              </ProjectSprintCard>
            )
          }
          <ProjectSprintCard>
            <ProjectSprintButton>
              +
            </ProjectSprintButton>
          </ProjectSprintCard>
        </ProjectSprintsList>
      </ProjectDesk>
    </>
  )
}

const ProjectDesk = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const ProjectBacklog = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 20px 0 0 10px;
`
const ProjectBacklogTitle = styled.h3`
  margin: 0 0 10px;
  font-weight: 700;
  line-height: 24px;
  font-size: 22px;
  color: ${colors.light_gray};
`
const ProjectBacklogList = styled.ul`
  height: 300px;
  padding: 10px 15px;
  border-radius: 10px;
  background-color: rgba(253, 232, 215, 0.4);
  list-style: none;
`
const ProjectBacklogItem = styled.li`
  margin: 10px 0 0;
  padding: 10px;
  border-radius: 10px;
  background-color: ${colors.white};
  position: relative;
`
const ProjectBacklogItemButton = styled.button`
  position: absolute;
  right: 10px;
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
const ProjectBacklogItemTitle = styled.h4`
  margin: 0;
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  color: ${colors.gray};
`
const ProjectBacklogItemDescription = styled.p`
  margin: 5px 0 0;
  font-weight: 500;
  line-height: 18px;
  font-size: 14px;
  color: ${colors.light_gray};
`
const ProjectBacklogButton = styled.button`
  margin: 5px 0;
  width: 100%;
  padding: 0;
  border: 0;
  background-color: transparent;
  font-weight: 700;
  line-height: 48px;
  font-size: 36px;
  color: ${colors.antique};
  cursor: pointer;
`
const ProjectSprintsList = styled.div`
  margin: 0 0 0 20px;
  display: flex;
  flex-direction: column;
  flex: 2;
`
const ProjectSprintsTitle = styled.h3`
  margin: 20px 0 10px;
  font-weight: 700;
  line-height: 24px;
  font-size: 22px;
  color: ${colors.light_gray};
`
const ProjectSprintCard = styled.div`
  margin: 0 0 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(253, 232, 215, 0.4);
  position: relative;
`
const ProjectSprintCardTitle = styled.h4`
  margin: 0;
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  color: ${colors.gray};
`
const ProjectSprintCardButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
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
const ProjectSprintButton = styled.button`
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  background-color: transparent;
  text-align: center;
  font-weight: 700;
  line-height: 24px;
  font-size: 24px;
  color: ${colors.antique};
  cursor: pointer;
`


export default ProjectTasks