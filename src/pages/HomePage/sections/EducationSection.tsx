import Title from "antd/lib/typography/Title";
import Content from "../../../components/Content/Content";
import Section, {
  SectionBackgroundColor,
} from "../../../components/Section/Section";

import stAndrewsLogo from "../../../assets/images/st_andrews.png";
import SubsectionBanner from "../../../components/SubsectionBanner/SubsectionBanner";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import ScrollAnimation from "../../../components/ScrollAnimation/ScrollAnimation";
import { AnimationType } from "../../../components/ScrollAnimation/AnimationType";

import { Col, Row } from "antd";
import InfoCard, { InfoCardColor } from "../../../components/InfoCard/InfoCard";
import keyIcon from "../../../assets/images/icons/key_icon.svg";
import searchIcon from "../../../assets/images/icons/search_icon.svg";
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
        </Content>
      </Section>
    </>
  );
}
