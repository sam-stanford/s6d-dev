import Section from "../../../components/Section/Section";
import Content from "../../../components/Content/Content";
import { Col, Row } from "antd";
import Title from "antd/lib/typography/Title";
import AnimatedProfile from "../../../components/AnimatedProfile/AnimatedProfile";
import { Mouse } from "../../../utils/Mouse";
import PillButton from "../../../components/PillButton/PillButton";
import rightArrow from "../../../assets/images/icons/arrow_right.svg";
import ScrollAnimation from "../../../components/ScrollAnimation/ScrollAnimation";
import { AnimationType } from "../../../components/ScrollAnimation/AnimationType";

// TODO
const ORANGE = "rgb(255, 169, 59)";

export default function AboutSection(props: { mouse: Mouse }) {
  return (
    <Section classNameModifiers={["no-padding-top"]}>
      <Content>
        <Row
          align="middle"
          justify="space-between"
          style={{ marginTop: "5em", flexDirection: "row-reverse" }}
        >
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <ScrollAnimation animation={AnimationType.zoomInLeft}>
              <AnimatedProfile mouse={props.mouse} />
            </ScrollAnimation>
          </Col>
          <Col
            xs={21}
            sm={21}
            md={12}
            lg={12}
            xl={12}
            style={{ margin: "auto" }}
          >
            <ScrollAnimation
              animation={AnimationType.zoomInRight}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Title
                level={2}
                italic
                style={{
                  fontWeight: "lighter",
                  textAlign: "center",
                  marginBottom: "1em",
                }}
              >
                Hi, I'm Sam!
              </Title>
              <Title
                level={3}
                italic
                style={{
                  fontWeight: "lighter",
                  textAlign: "center",
                  marginTop: "0",
                  marginBottom: "1.4em",
                }}
              >
                I'm a motivated software engineer with a passion for
                problem-solving and all-things tech!
              </Title>
              <PillButton
                href={"/Sam_Stanford_CV.pdf"} /* TODO */
                targetNewTab
                text="Check Out My CV"
                textColor="white"
                backgroundColor={ORANGE}
                arrowIcon={rightArrow}
              />
            </ScrollAnimation>
          </Col>
        </Row>
      </Content>
    </Section>
  );
}
