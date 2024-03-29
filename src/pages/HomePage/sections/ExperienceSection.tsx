import Content from "../../../components/Content/Content";
import Section from "../../../components/Section/Section";
import ukMap from "../../../assets/images/uk_map.svg";
import { Col, Row, Space } from "antd";

import ecoeatsLogoSquare from "../../../assets/images/ecoeats_square_logo.svg";
import bloombergLogoSquare from "../../../assets/images/bloomberg_logo_square.jpeg";
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
const BLOOMBERG_ORANGE = "#ffa93b";

const UNFOCUSED_SATURATION = 0.3;

enum Experience {
  BLOOMBERG,
  MATHWORKS,
  ECOEATS,
  BLUESTONE,
}

export default function ExperienceSection() {
  const [focusedExperience, setFocusedExperience] = useState<Experience>(
    Experience.BLOOMBERG
  );

  const [ecoeatsHovered, setEcoeatsHovered] = useState(false);
  const [ecoeatsHighlighted, setEcoeatsHighlighted] = useState(false);

  const [bluestoneHovered, setBluestoneHovered] = useState(false);
  const [bluestoneHighlighted, setBluestoneHighlighted] = useState(false);

  const [mathworksHovered, setMathworksHovered] = useState(false);
  const [mathworksHighlighted, setMathworksHighlighted] = useState(false);

  const [bloombergHovered, setBloombergHovered] = useState(false);
  const [bloombergHighlighted, setBloombergHighlighted] = useState(false);

  useEffect(() => {
    setEcoeatsHighlighted(
      focusedExperience === Experience.ECOEATS || ecoeatsHovered
    );
  }, [focusedExperience, ecoeatsHovered]);

  useEffect(() => {
    setBluestoneHighlighted(
      focusedExperience === Experience.BLUESTONE || bluestoneHovered
    );
  }, [focusedExperience, bluestoneHovered]);

  useEffect(() => {
    setMathworksHighlighted(
      focusedExperience === Experience.MATHWORKS || mathworksHovered
    );
  }, [focusedExperience, mathworksHovered]);

  useEffect(() => {
    setBloombergHighlighted(
      focusedExperience === Experience.BLOOMBERG || bloombergHovered
    );
  }, [focusedExperience, bloombergHovered]);

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
          setFocusedExperience(Experience.ECOEATS);
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
          nearly 1,000 daily active users.
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
          setFocusedExperience(Experience.BLUESTONE);
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
          <strong>Key Skills</strong>: Teamwork, UI &amp; UX Design, Client
          Interaction
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
          setFocusedExperience(Experience.MATHWORKS);
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
          <strong>Key Technologies</strong>: Go, JavaScript, C++, MATLAB
        </p>
        <p>
          <strong>Key Skills</strong>: SCRUM, Remote Development, System Design
        </p>
      </ExperienceCard>
    </ScrollAnimation>
  );

  const bloombergCard = (
    <ScrollAnimation animation={AnimationType.fadeRight}>
      <ExperienceCard
        logoSrc={bloombergLogoSquare}
        logoAlt="Bloomberg L.P. logo"
        title="Bloomberg L.P."
        subtitle="May 2021 - Sept 2021"
        isHighlighted={bloombergHighlighted}
        onFocus={() => {
          setFocusedExperience(Experience.BLOOMBERG);
        }}
        onMouseEnter={() => {
          setBloombergHovered(true);
        }}
        onMouseLeave={() => {
          setBloombergHovered(false);
        }}
      >
        <p>
          My current role as <strong>reliability engineer</strong>, with a focus
          on developer experience and software supply-chain security, has
          provided me with{" "}
          <strong>
            experience hosting critical services with three nines uptime
          </strong>
          , including taking on-call duties, developing for new and legacy
          systems, and leading small teams to success.
        </p>
        <p>
          <strong>Key Technologies</strong>: Python, Shell, TypeScript, SQL
        </p>
        <p>
          <strong>Key Skills</strong>: Site-Reliability Engineering, Service
          Monitoring, Firefighting, Agile Development
        </p>
      </ExperienceCard>
    </ScrollAnimation>
  );

  const map = (
    <ScrollAnimation animation={AnimationType.fadeLeft}>
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
            setFocusedExperience(Experience.ECOEATS);
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
            setFocusedExperience(Experience.BLUESTONE);
          }}
          onMouseEnter={() => {
            setBluestoneHovered(true);
          }}
          onMouseLeave={() => {
            setBluestoneHovered(false);
          }}
        />
        <PulsingButton
          top="76%"
          left="72%"
          color={MATHWORKS_BLUE}
          saturation={mathworksHighlighted ? 1 : UNFOCUSED_SATURATION}
          isHighlighted={mathworksHighlighted}
          onFocus={() => {
            setFocusedExperience(Experience.MATHWORKS);
          }}
          onMouseEnter={() => {
            setMathworksHovered(true);
          }}
          onMouseLeave={() => {
            setMathworksHovered(false);
          }}
        />
        <PulsingButton
          top="86%"
          left="68%"
          color={BLOOMBERG_ORANGE}
          saturation={bloombergHighlighted ? 1 : UNFOCUSED_SATURATION}
          isHighlighted={bloombergHighlighted}
          onFocus={() => {
            setFocusedExperience(Experience.BLOOMBERG);
          }}
          onMouseEnter={() => {
            setBloombergHighlighted(true);
          }}
          onMouseLeave={() => {
            setBloombergHighlighted(false);
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
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={11}
              xl={11}
              style={{ justifyContent: "space-between" }}
            >
              <Space direction="vertical">
                {bloombergCard}
                {mathworksCard}
              </Space>
            </Col>
            <Col
              xs={0}
              sm={0}
              md={0}
              lg={11}
              xl={11}
              style={{ justifyContent: "space-between" }}
            >
              {map}
            </Col>
          </Row>
          <Row align="middle" justify="space-between">
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={11}
              xl={11}
              style={{ justifyContent: "space-between" }}
            >
              {ecoeatsCard}
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={11}
              xl={11}
              style={{ justifyContent: "space-between" }}
            >
              {bluestoneCard}
            </Col>
          </Row>
        </Content>
      </Section>
    </>
  );
}
