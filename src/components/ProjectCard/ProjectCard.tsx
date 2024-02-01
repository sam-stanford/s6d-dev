import "./ProjectCard.scss";

import { Col, List, Row } from "antd";
import Title from "antd/lib/typography/Title";
import { ReactNode, useRef } from "react";
import { Mouse } from "../../utils/Mouse";
import { AnimationType } from "../ScrollAnimation/AnimationType";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import SubsectionBanner from "../SubsectionBanner/SubsectionBanner";

type ProjectCardProps = {
  logo: {
    src: string;
    alt: string;
  };
  foregroundImage: {
    src: string;
    alt: string;
  };
  backgroundColor: string;
  title: string;
  subtitle: string;
  tags: string[];
  animation: AnimationType;
  textContent: ReactNode;
  noMarginBottom?: boolean;
};

export default function ProjectCard(props: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollAnimation animation={props.animation}>
      <div
        className={`project-card__container${
          props.noMarginBottom
            ? " project-card__container--no-margin-bottom"
            : ""
        }`}
        ref={cardContainerRef}
      >
        <div
          className="project-card__card"
          ref={cardRef}
          style={{
            backgroundColor: props.backgroundColor,
          }}
        >
          <img
            className="project-card__card__logo"
            src={props.logo.src}
            alt={props.logo.alt}
          />
          <Row style={{ width: "100%" }} align="middle" justify="space-between">
            <Col xs={24} sm={24} md={24} lg={11} xl={11}>
              <SubsectionBanner
                title={props.title}
                subtitle={props.subtitle}
                fontColor="white"
                marginBottom="1em"
              ></SubsectionBanner>
              {props.textContent}
              <List
                className="project-card__card__tags__wrapper"
                size="large"
                dataSource={props.tags}
                renderItem={(item, _) => {
                  return (
                    <Title className="project-card__card__tags__tag" level={5}>
                      {item}
                    </Title>
                  );
                }}
              ></List>
            </Col>
            <Col xs={0} sm={0} md={0} lg={11} xl={11}>
              <img
                alt={props.foregroundImage.alt}
                src={props.foregroundImage.src}
                className="project-card__card__image"
                style={{
                  display: props.foregroundImage ? "block" : "none",
                }}
              />
            </Col>
          </Row>
        </div>
      </div>
    </ScrollAnimation>
  );
}
