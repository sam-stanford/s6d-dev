import { List } from "antd";
import Title from "antd/lib/typography/Title";
import Content from "../../../components/Content/Content";
import { AnimationType } from "../../../components/ScrollAnimation/AnimationType";
import ScrollAnimation from "../../../components/ScrollAnimation/ScrollAnimation";
import Section from "../../../components/Section/Section";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import SkillsList from "../../../components/SkillsList/SkillsList";

const skills: string[] = [
  "Java",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS, Sass",
  "Python",
  "PHP",
  "Go",
  "C",
  "C++",
  "Git",
  "Perforce",
  "SQL",
  "GraphQL",
  "React",
  "Docker",
  "NestJS",
  "Node.js",
  "WordPress",
  "Linux",
  "Affinity",
  "Photoshop",
  "MS Office",
  "G Workspace",
];

export default function SkillsSection() {
  return (
    <>
      <Section extraPaddingBottom>
        <Content>
          <SectionHeader
            firstLine="TOOLS"
            secondLine="&amp; TECH"
            className="skills-section-header"
          />
          <SkillsList skills={skills} />
        </Content>
      </Section>
    </>
  );
}
