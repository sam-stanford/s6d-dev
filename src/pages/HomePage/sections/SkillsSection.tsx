import Content from "../../../components/Content/Content";
import Section from "../../../components/Section/Section";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import SkillsList from "../../../components/SkillsList/SkillsList";

const skills: string[] = [
  "Python",
  "TypeScript",
  "JavaScript",
  "Java",
  "HTML",
  "CSS, Sass",
  "PHP",
  "Go",
  "C",
  "C++",
  "Git",
  "SQL",
  "GraphQL",
  "React",
  "Docker",
  "NestJS",
  "Node.js",
  "WordPress",
  "Linux",
  "Shell",
  "Perl",
  "Flask",
  "Affinity",
  "Photoshop",
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
