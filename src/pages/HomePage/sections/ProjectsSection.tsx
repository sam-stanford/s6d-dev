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
import Text from "antd/lib/typography/Text";

import comparisonWebserviceImage from "../../../assets/images/comparison_web_service.png";
import bloombergLogoFull from "../../../assets/images/bloomberg_logo_full.svg";
import pypiFlaskScreenshot from "../../../assets/images/pypi-flask-screenshot.png";

// TODO
const MATHWORKS_BLUE = "#005594";
const ECOEATS_GREEN = "#31B668";
const BLOOMBERG_ORANGE = "#444444";

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
const comparisonWebserviceTags = ["Go", "JavaScript", "C++"];

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
const riderBookingSystemTags = ["TypeScript", "GraphQL", "React"];

const ingestionSystemContent = (
  <Text style={{ color: "white" }}>
    &bull; <strong>Problem:</strong> Ingesting malicious open-source software
    from npm, PyPI, etc. posed a significant threat.
    {TEXT_DIVIDER}
    &bull; <strong>Solution:</strong> Developing an interface to open-source
    projects, applying heuristics to filter out malicious projects.
    {TEXT_DIVIDER}
    &bull; <strong>Outcome:</strong> 100% of retroactively discovered malicious
    packages were blocked with zero manual intervention.
  </Text>
);
const ingestionSystemTags = ["Python", "SQL", "Kubernetes"];

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
            logo={{ src: bloombergLogoFull, alt: "Ecoeats logo" }}
            backgroundColor={BLOOMBERG_ORANGE}
            title="OSS Ingestion Relay"
            subtitle="Bloomberg 2023"
            foregroundImage={{
              src: pypiFlaskScreenshot,
              alt: "Screenshot of an academic paper on spot instances",
            }}
            tags={ingestionSystemTags}
            animation={AnimationType.fadeRight}
            textContent={ingestionSystemContent}
            noMarginBottom
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
            animation={AnimationType.fadeRight}
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
            animation={AnimationType.fadeRight}
            textContent={riderBookingSystemContent}
          />
        </Content>
      </Section>
    </>
  );
}
