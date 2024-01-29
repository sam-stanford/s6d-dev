import "./HeroSection.scss";

import Title from "antd/lib/typography/Title";
import Content from "../../../../components/Content/Content";
import FloatingButton, {
  FloatingButtonAnimationDelay,
  FloatingButtonOutlineSize,
} from "../../../../components/FloatingButton/FloatingButton";
import Section from "../../../../components/Section/Section";

import linkedinLogo from "../../../../assets/images/linkedin_logo.png";
import githubLogo from "../../../../assets/images/github_logo.png";
import ScrollAnimation from "../../../../components/ScrollAnimation/ScrollAnimation";
import { AnimationType } from "../../../../components/ScrollAnimation/AnimationType";
import emailIcon from "../../../../assets/images/icons/email_icon.svg";

const UNSATURATED_LIGHT_BLUE = "#e5f1f8";
const UNSATURATED_LIGHT_PINK = "#F8E5F0";
const UNSATURATED_LIGHT_ORANGE = "#FBE8CF";

export default function HeroSection() {
  return (
    <>
      <Section classNameModifiers={["hero"]}>
        <Content>
          <ScrollAnimation
            animation={AnimationType.fadeRight}
            style={{ zIndex: 1, position: "relative", pointerEvents: "none" }}
          >
            <Title
              className="hero-title"
              style={{
                marginBottom: "0.1em",
              }}
            >
              Sam
              <br />
              Stanford
            </Title>
          </ScrollAnimation>
          <ScrollAnimation
            animation={AnimationType.fadeRight}
            delay={300}
            duration={700}
            style={{ zIndex: 1, position: "relative", pointerEvents: "none" }}
          >
            <Title
              italic
              level={3}
              className="hero-subtitle"
              style={{
                margin: "0 0 0 8px",
                fontWeight: "lighter",
              }}
            >
              Aspiring Software Developer
            </Title>
          </ScrollAnimation>
          <div className="hero-buttons" data-scroll-speed={"2"}>
            <FloatingButton
              className="floating-button--left"
              logo={linkedinLogo}
              backgroundColor={UNSATURATED_LIGHT_BLUE}
              outlineSize={FloatingButtonOutlineSize.medium}
              animationDelay={FloatingButtonAnimationDelay.short}
              link="https://www.linkedin.com/in/sam-stanford/"
              anchorTarget="_blank"
              popAnimationDelay={800}
            />

            <FloatingButton
              className="floating-button--middle"
              logo={githubLogo}
              backgroundColor={UNSATURATED_LIGHT_PINK}
              outlineSize={FloatingButtonOutlineSize.small}
              animationDelay={FloatingButtonAnimationDelay.none}
              link="https://github.com/sam-stanford"
              anchorTarget="_blank"
              popAnimationDelay={500}
            />

            <FloatingButton
              className="floating-button--right"
              logo={emailIcon}
              backgroundColor={UNSATURATED_LIGHT_ORANGE}
              outlineSize={FloatingButtonOutlineSize.large}
              animationDelay={FloatingButtonAnimationDelay.long}
              link="mailto:sam@sjstanford.dev"
              popAnimationDelay={1100}
            />
          </div>
        </Content>
      </Section>
    </>
  );
}
