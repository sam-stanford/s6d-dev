import Title from "antd/lib/typography/Title";
import Content from "../../../components/Content/Content";
import Section, {
  SectionBackgroundColor,
} from "../../../components/Section/Section";

import stAndrewsLogo from "../../../assets/images/st_andrews.png";
import stPetersLogo from "../../../assets/images/st_peters.png";
import SubsectionBanner from "../../../components/SubsectionBanner/SubsectionBanner";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import ScrollAnimation from "../../../components/ScrollAnimation/ScrollAnimation";
import { AnimationType } from "../../../components/ScrollAnimation/AnimationType";

import { Col, Row } from "antd";
import InfoCard, { InfoCardColor } from "../../../components/InfoCard/InfoCard";
import keyIcon from "../../../assets/images/icons/key_icon.svg";
import searchIcon from "../../../assets/images/icons/search_icon.svg";
import gradCapIcon from "../../../assets/images/icons/grad-cap-icon.svg";
import pencilIcon from "../../../assets/images/icons/pencil-icon.svg";
import musicIcon from "../../../assets/images/icons/music-icon.svg";
import tasksIcon from "../../../assets/images/icons/tasks_icon.svg";

export default function EducationSection() {
  const TEXT_DIVIDER = <div style={{ width: "100%", height: "1em" }} />;

  const stAndrewsInfo = {
    keyHighlights: (
      <Title level={5} style={{ fontWeight: "lighter" }}>
        &bull; Predicted First Class Integrated Masters Degree
        (GPA&nbsp;18.3/20)
        {TEXT_DIVIDER}
        &bull; Dean's List for Academic Excellence (2020,&nbsp;2021)
        {TEXT_DIVIDER}
        &bull; Multiple choral &amp; instrumental music scholarships
      </Title>
    ),
    areasOfFocus: (
      <Title level={5} style={{ fontWeight: "lighter" }}>
        &bull; Data-intensive systems &amp; networks
        {TEXT_DIVIDER}
        &bull; Sofware engineering
        {TEXT_DIVIDER}
        &bull; Logic &amp; computational complexity
        {TEXT_DIVIDER}
        &bull; Machine learning &amp; statistics
      </Title>
    ),
    mastersProject: (
      <Title level={5} style={{ fontWeight: "lighter" }}>
        &bull; Design &amp; development of a spot instance scheduler
        {TEXT_DIVIDER}
        &bull; Combines research, experimental practice, and software
        engineering
        {TEXT_DIVIDER}
        &bull; Key concepts: scheduling, fault-tolerance, queueing theory
      </Title>
    ),
  };

  const stPetersInfo = {
    alevels: (
      <Title level={5} style={{ fontWeight: "lighter" }}>
        &bull; Mathematics (A*)
        {TEXT_DIVIDER}
        &bull; Further Mathematics (A*)
        {TEXT_DIVIDER}
        &bull; Chemistry (A*)
        {TEXT_DIVIDER}
        &bull; Physics (A)
      </Title>
    ),
    gcses: (
      <Title level={5} style={{ fontWeight: "lighter" }}>
        &bull; A*: Maths, Further Maths, Dual Science (Chem, Phys, Bio),
        Religious Studies, Music, German
        {TEXT_DIVIDER}
        &bull; A: English, Design Technology, History
      </Title>
    ),
    extraCurricular: (
      <Title level={5} style={{ fontWeight: "lighter" }}>
        &bull; Three Grade 8 ABRSM
        {TEXT_DIVIDER}
        &bull; One Grade 7 ABRSM
        {TEXT_DIVIDER}
        &bull; National finals for F1 in Schools
        {TEXT_DIVIDER}
        &bull; Platinum Award in National Concert Band Festival
      </Title>
    ),
  };

  return (
    <>
      <Section backgroundColor={SectionBackgroundColor.grey}>
        <Content>
          <SectionHeader
            firstLine="EDUCATION"
            className="education-section-header"
          />
          <ScrollAnimation animation={AnimationType.fadeRight}>
            <SubsectionBanner
              title="University of St&nbsp;Andrews"
              subtitle="MSci (Hons) Computer Science, 2017-2022"
              image={{
                src: stAndrewsLogo,
                alt: "University of St Andrews logo",
              }}
              marginTop="2em"
            />
          </ScrollAnimation>

          <Row style={{ width: "100%" }} align="middle" justify="space-between">
            <Col></Col>
          </Row>
          <Row justify="space-between" align="middle">
            <Col xs={24} sm={24} md={24} lg={7} xl={7}>
              <InfoCard
                icon={{
                  src: keyIcon,
                  alt: "key icon",
                }}
                heading="Key Highlights"
                content={stAndrewsInfo.keyHighlights}
                animation={AnimationType.fadeLeft}
                iconColor={InfoCardColor.blue}
              />
            </Col>
            <Col xs={24} sm={24} md={24} lg={7} xl={7}>
              <InfoCard
                icon={{
                  src: searchIcon,
                  alt: "maginfying glass icon",
                }}
                heading="Areas of Focus"
                animation={AnimationType.fadeLeft}
                content={stAndrewsInfo.areasOfFocus}
                iconColor={InfoCardColor.blue}
              />
            </Col>
            <Col xs={24} sm={24} md={24} lg={7} xl={7}>
              <InfoCard
                icon={{
                  src: tasksIcon,
                  alt: "task list icon",
                }}
                heading="Masters Project"
                animation={AnimationType.fadeLeft}
                content={stAndrewsInfo.mastersProject}
                iconColor={InfoCardColor.blue}
              />
            </Col>
          </Row>

          <ScrollAnimation animation={AnimationType.fadeRight}>
            <SubsectionBanner
              title="St Peter's School, York"
              subtitle={"GCSEs & A-Levels, 2012-2017"}
              image={{
                src: stPetersLogo,
                alt: "St Peter's School, York logo",
              }}
              marginTop="6em"
            />
          </ScrollAnimation>
          <Row justify="space-between" align="middle">
            <Col xs={24} sm={24} md={24} lg={7} xl={7}>
              <InfoCard
                icon={{
                  src: gradCapIcon,
                  alt: "graduation cap icon",
                }}
                heading="A-Levels"
                content={stPetersInfo.alevels}
                animation={AnimationType.fadeLeft}
                iconColor={InfoCardColor.brown}
              />
            </Col>
            <Col xs={24} sm={24} md={24} lg={7} xl={7}>
              <InfoCard
                icon={{
                  src: pencilIcon,
                  alt: "pencil icon",
                }}
                heading="GCSEs"
                animation={AnimationType.fadeLeft}
                content={stPetersInfo.gcses}
                iconColor={InfoCardColor.brown}
              />
            </Col>
            <Col xs={24} sm={24} md={24} lg={7} xl={7}>
              <InfoCard
                icon={{
                  src: musicIcon,
                  alt: "music notes icon",
                }}
                heading="Extra-Curricular"
                animation={AnimationType.fadeLeft}
                content={stPetersInfo.extraCurricular}
                iconColor={InfoCardColor.brown}
              />
            </Col>
          </Row>
        </Content>
      </Section>
    </>
  );
}
