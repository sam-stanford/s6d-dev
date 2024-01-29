import "./SkillsList.scss";

import { List } from "antd";
import Title from "antd/lib/typography/Title";
import { AnimationType } from "../ScrollAnimation/AnimationType";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

export default function SkillsList(props: { skills: string[] }) {
  return (
    <>
      <div className="skills-list skills-list--3-col">
        {generateSkillsListColumn(
          props.skills.slice(0, props.skills.length / 3),
          0
        )}
        {generateSkillsListColumn(
          props.skills.slice(
            props.skills.length / 3,
            (props.skills.length / 3) * 2
          ),
          200
        )}
        {generateSkillsListColumn(
          props.skills.slice(
            (props.skills.length / 3) * 2,
            props.skills.length
          ),
          400
        )}
      </div>

      <div className="skills-list skills-list--2-col">
        {generateSkillsListColumn(
          props.skills.slice(0, props.skills.length / 2),
          0
        )}
        {generateSkillsListColumn(
          props.skills.slice(props.skills.length / 2, props.skills.length),
          200
        )}
      </div>
    </>
  );
}

function generateSkillsListColumn(skills: string[], animationDelay: number) {
  return (
    <List
      className="skills-list__column"
      size="large"
      dataSource={skills}
      renderItem={(skill) => {
        return (
          <div className="skills-list__column">
            {generateSkillsListItem(skill, animationDelay)}
          </div>
        );
      }}
    ></List>
  );
}

function generateSkillsListItem(skill: string, animationDelay: number) {
  return (
    <ScrollAnimation animation={AnimationType.fadeLeft} delay={animationDelay}>
      <Title
        level={4}
        className="skills-list__item"
        style={{
          fontWeight: "lighter",
          padding: "0.3em 0",
        }}
      >
        {skill}
      </Title>
    </ScrollAnimation>
  );
}

function shouldStartNewCol(
  index: number,
  numberOfCols: number,
  numberOfItems: number
) {
  return index % (numberOfItems / numberOfCols) === 0;
}

function getDelayForIndex3Col(index: number) {
  switch (index % 3) {
    case 0:
      return 0;
    case 1:
      return 200;
    case 2:
      return 400;
    default:
      return 0;
  }
}

function getDelayForIndex2Col(index: number) {
  switch (index % 2) {
    case 0:
      return 0;
    case 1:
      return 200;
    default:
      return 0;
  }
}
