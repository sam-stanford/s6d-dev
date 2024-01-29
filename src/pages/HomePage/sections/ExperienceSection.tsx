import Content from "../../../components/Content/Content";
import Section from "../../../components/Section/Section";
import ukMap from "../../../assets/images/uk_map.svg";
import { Col, Row } from "antd";

import ecoeatsLogoSquare from "../../../assets/images/ecoeats_square_logo.svg";
import b98LogoSquare from "../../../assets/images/b98.svg";
import mathworksLogoSquare from "../../../assets/images/mathworks_square_logo.png";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import { useEffect, useState } from "react";
import ExperienceCard from "../../../components/ExperienceCard/ExperienceCard";
import PulsingButton from "../../../components/PulsingButton/PulsingButton";
import ScrollAnimation from "../../../components/ScrollAnimation/ScrollAnimation";
import { AnimationType } from "../../../components/ScrollAnimation/AnimationType";

// TODO: These consts
const MATHWORKS_BLUE = "#005594";
const ECOEATS_GREEN = "#31B668";
const BLUESTONE_RED = "#CF0000";

const UNFOCUSED_SATURATION = 0.6;

export default function ExperienceSection() {
  const [ecoeatsFocused, setEcoeatsFocused] = useState(false);
  const [ecoeatsHovered, setEcoeatsHovered] = useState(false);
  const [ecoeatsHighlighted, setEcoeatsHighlighted] = useState(false);

  const [bluestoneFocused, setBluestoneFocused] = useState(false);
  const [bluestoneHovered, setBluestoneHovered] = useState(false);
  const [bluestoneHighlighted, setBluestoneHighlighted] = useState(false);

  const [mathworksFocused, setMathworksFocused] = useState(false);
  const [mathworksHovered, setMathworksHovered] = useState(false);
  const [mathworksHighlighted, setMathworksHighlighted] = useState(false);

  useEffect(() => {
    setEcoeatsHighlighted(ecoeatsFocused || ecoeatsHovered);
  }, [ecoeatsFocused, ecoeatsHovered]);

  useEffect(() => {
    setBluestoneHighlighted(bluestoneFocused || bluestoneHovered);
  }, [bluestoneFocused, bluestoneHovered]);

  useEffect(() => {
    setMathworksHighlighted(mathworksFocused || mathworksHovered);
  }, [mathworksFocused, mathworksHovered]);

  const ecoeatsCard = (
    <ScrollAnimation animation={AnimationType.fadeRight}>
      <ExperienceCard
        logoSrc={ecoeatsLogoSquare}
        logoAlt="Ecoeats logo"
        title="Ecoeats"
        subtitle="May 2020 - June 2021"
        isHighlighted={ecoeatsHighlighted}
        className="ecoeats-experience-card"
        onFocus={() => {
          setEcoeatsFocused(true);
        }}
        onBlur={() => {
          setEcoeatsFocused(false);
        }}
        onMouseEnter={() => {
          setEcoeatsHovered(true);
        }}
        onMouseLeave={() => {
          setEcoeatsHovered(false);
        }}
      >
        <p>
          Working remotely as a <strong>backend software engineer</strong> at an{" "}
          <strong>eco-friendly food-delivery startup</strong> allowed me to hone
          my skills by developing features to solve real-world problems using
          modern technologies, helping grow the daily user base from under 50 to
          nearly 1,000 users.
        </p>
        <p>
          <strong>Key Technologies</strong>: TypeScript, NestJS, PostgreSQL, Git
        </p>
        <p>
          <strong>Key Skills</strong>: Entrepreneurship, Problem Solving
        </p>
      </ExperienceCard>
    </ScrollAnimation>
  );

  const bluestoneCard = (
    <ScrollAnimation animation={AnimationType.fadeRight}>
      <ExperienceCard
        logoSrc={b98LogoSquare}
        logoAlt="Bluestone98 logo"
        title="Bluestone98"
        subtitle="July 2019 - Sept 2019"
        isHighlighted={bluestoneHighlighted}
        onFocus={() => {
          setBluestoneFocused(true);
        }}
        onBlur={() => {
          setBluestoneFocused(false);
        }}
        onMouseEnter={() => {
          setBluestoneHovered(true);
        }}
        onMouseLeave={() => {
          setBluestoneHovered(false);
        }}
      >
        <p>
          Designing and developing bespoke websites for a variety of clients as
          a <strong>web developer</strong> for a local Harrogate-based{" "}
          <strong>digital-brand-development agency</strong> fuelled my desire to
          learn, both technically and creatively.
        </p>
        <p>
          <strong>Key Technologies</strong>: HTML, CSS, JavaScript, Adobe CS
        </p>
        <p>
          <strong>Key Skills</strong>: Teamwork, UI &amp; UX Design
        </p>
      </ExperienceCard>
    </ScrollAnimation>
  );

  const mathworksCard = (
    <ScrollAnimation animation={AnimationType.fadeRight}>
      <ExperienceCard
        logoSrc={mathworksLogoSquare}
        logoAlt="MathWorks logo"
        title="MathWorks"
        subtitle="May 2021 - Sept 2021"
        isHighlighted={mathworksHighlighted}
        onFocus={() => {
          setMathworksFocused(true);
        }}
        onBlur={() => {
          setMathworksFocused(false);
        }}
        onMouseEnter={() => {
          setMathworksHovered(true);
        }}
        onMouseLeave={() => {
          setMathworksHovered(false);
        }}
      >
        <p>
          Interning at MathWorks as a{" "}
          <strong>software development intern</strong> provided me with a
          comprehensive skillset for working on large-scale systems designed by
          multiple teams.
        </p>
        <p>
          <strong>Key Technologies</strong>: JavaScript, C++, MATLAB, Go
        </p>
        <p>
          <strong>Key Skills</strong>: SCRUM, Non-Verbal Communication
        </p>
      </ExperienceCard>
    </ScrollAnimation>
  );

  return (
    <>
      <Section>
        <Content>
          <SectionHeader
            firstLine="EXPERIENCE"
            className="experience-section-header"
          />
          <Row align="middle" justify="space-between">
            <Col xs={24} sm={24} md={24} lg={11} xl={11}>
              {ecoeatsCard}
              {bluestoneCard}
              {mathworksCard}
            </Col>
            <Col xs={0} sm={0} md={0} lg={11} xl={11}>
              <ScrollAnimation
                animation={AnimationType.fadeLeft}
                anchorElementClass="ecoeats-experience-card"
              >
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <PulsingButton
                    top="28%"
                    left="60%"
                    color={ECOEATS_GREEN}
                    saturation={ecoeatsHighlighted ? 1 : UNFOCUSED_SATURATION}
                    isHighlighted={ecoeatsHighlighted}
                    onFocus={() => {
                      setEcoeatsFocused(true);
                    }}
                    onBlur={() => {
                      setEcoeatsFocused(false);
                    }}
                    onMouseEnter={() => {
                      setEcoeatsHovered(true);
                    }}
                    onMouseLeave={() => {
                      setEcoeatsHovered(false);
                    }}
                  />
                  <PulsingButton
                    top="56%"
                    left="65%"
                    color={BLUESTONE_RED}
                    saturation={bluestoneHighlighted ? 1 : UNFOCUSED_SATURATION}
                    isHighlighted={bluestoneHighlighted}
                    onFocus={() => {
                      setBluestoneFocused(true);
                    }}
                    onBlur={() => {
                      setBluestoneFocused(false);
                    }}
                    onMouseEnter={() => {
                      setBluestoneHovered(true);
                    }}
                    onMouseLeave={() => {
                      setBluestoneHovered(false);
                    }}
                  />
                  <PulsingButton
                    top="78%"
                    left="70%"
                    color={MATHWORKS_BLUE}
                    saturation={mathworksHighlighted ? 1 : UNFOCUSED_SATURATION}
                    isHighlighted={mathworksHighlighted}
                    onFocus={() => {
                      setMathworksFocused(true);
                    }}
                    onBlur={() => {
                      setMathworksFocused(false);
                    }}
                    onMouseEnter={() => {
                      setMathworksHovered(true);
                    }}
                    onMouseLeave={() => {
                      setMathworksHovered(false);
                    }}
                  />
                  <img
                    src={ukMap}
                    alt="outline of UK map"
                    style={{
                      width: "100%",
                      maxWidth: "600px",
                      height: "auto",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </ScrollAnimation>
            </Col>
          </Row>
        </Content>
      </Section>
    </>
  );
}
