import Content from "../../../components/Content/Content";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";
import Section, {
  SectionBackgroundColor,
} from "../../../components/Section/Section";

import ecoeatsLogo from "../../../assets/images/ecoeats_logo.svg";
import mathworksLogo from "../../../assets/images/mathworks_logo_white_text.svg";
import ecoeatsImage from "../../../assets/images/rider_booking_system_image.png";
import SectionTitle from "../../../components/SectionHeader/SectionHeader";
import { AnimationType } from "../../../components/ScrollAnimation/AnimationType";
import stAndrewsLogo from "../../../assets/images/st_andrews_logo_rect.png";
import Text from "antd/lib/typography/Text";

import comparisonWebserviceImage from "../../../assets/images/comparison_web_service.png";
import mastersProjectImage from "../../../assets/images/masters_project_image.png";

// TODO
const MATHWORKS_BLUE = "#005594";
const ECOEATS_GREEN = "#31B668";
const ST_ANDREWS_RED = "#7F4274";

const TEXT_DIVIDER = <div style={{ width: "100%", height: "1em" }} />;

// TODO: Turn this into a data object
const comparisonWebserviceContent = (
  <Text style={{ color: "white" }}>
    &bull; <strong>Problem:</strong> Comparing Simulink files in source-control
    repositories was slow and laborious.
    {TEXT_DIVIDER}
    &bull; <strong>Solution:</strong> Developed a web app which integrates with
    repositories (e.g. GitHub) and compares Simulink files in a browser.
    {TEXT_DIVIDER}
    &bull; <strong>Outcome:</strong> Vastly improved internal source-control
    submission process when working with GitHub and GitLab.
  </Text>
);
const comparisonWebserviceTags = ["JavaScript", "Go", "C++"];

const riderBookingSystemContent = (
  <Text style={{ color: "white" }}>
    &bull; <strong>Problem:</strong> Busy delivery times (e.g. Friday evening)
    had too few riders to cope with customer demand.
    {TEXT_DIVIDER}
    &bull; <strong>Solution:</strong> Engineering a booking system which
    provided benefits to riders for working busy hours.
    {TEXT_DIVIDER}
    &bull; <strong>Outcome:</strong> Helped grow the avg. daily users from under
    50 to nearly 1,000 by providing confidence that food would be delivered on
    time.
  </Text>
);
const riderBookingSystemTags = ["TypeScript", "SQL", "GraphQL"];

const mastersProjectContent = (
  <Text style={{ color: "white" }}>
    &bull; <strong>Summary:</strong> Designing and developing a scheduler which
    reduces cloud costs by running jobs on spot instances.
    {TEXT_DIVIDER}
    &bull; <strong>Key Concepts:</strong> Scheduling, resource management,
    queueing theory, fault-tolerance, software engineering, scientific
    experimentation
  </Text>
);
const mastersProjectTags = ["Kubernetes", "Python", "LaTeX"];

export default function ProjectsSection() {
  return (
    <>
      <Section backgroundColor={SectionBackgroundColor.grey}>
        <Content>
          <SectionTitle
            firstLine="FEATURED"
            secondLine="PROJECTS"
            className="projects-section-header"
          />
          <ProjectCard
            logo={{ src: mathworksLogo, alt: "MathWorks logo" }}
            foregroundImage={{
              src: comparisonWebserviceImage,
              alt: "Screenshot of a file comparison webservice",
            }}
            backgroundColor={MATHWORKS_BLUE}
            title="Comparison Web Service"
            subtitle="MathWorks, 2021"
            tags={comparisonWebserviceTags}
            animation={AnimationType.fade}
            textContent={comparisonWebserviceContent}
          />
          <ProjectCard
            logo={{ src: ecoeatsLogo, alt: "Ecoeats logo" }}
            foregroundImage={{
              src: ecoeatsImage,
              alt: "Screenshot of a booking management system",
            }}
            backgroundColor={ECOEATS_GREEN}
            title="Rider Booking System"
            subtitle="Ecoeats, 2020"
            tags={riderBookingSystemTags}
            animation={AnimationType.fade}
            textContent={riderBookingSystemContent}
          />
          <ProjectCard
            logo={{ src: stAndrewsLogo, alt: "Ecoeats logo" }}
            backgroundColor={ST_ANDREWS_RED}
            title="Spot Instance Scheduler"
            subtitle="University of St Andrews, 2021"
            foregroundImage={{
              src: mastersProjectImage,
              alt: "Screenshot of an academic paper on spot instances",
            }}
            tags={mastersProjectTags}
            animation={AnimationType.fade}
            textContent={mastersProjectContent}
            noMarginBottom
          />
        </Content>
      </Section>
    </>
  );
}
