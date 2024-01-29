import "./ProjectCard.scss";

import { Col, List, Row } from "antd";
import Title from "antd/lib/typography/Title";
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
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
  mouse: Mouse;
  animation: AnimationType;
  textContent: ReactNode;
  noMarginBottom?: boolean;
};

export default function ProjectCard(props: ProjectCardProps) {
  const [cardIsActive, setCardIsActive] = useState(false);
  const [cardRotation, setCardRotation] = useState({
    x: 0,
    y: 0,
  });

  const cardRef = useRef<HTMLDivElement>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const CONSTRAIN = 80;

  const updateCardRotation = useCallback(() => {
    if (cardRef.current && cardContainerRef.current) {
      const containerBoundingRect =
        cardContainerRef.current.getBoundingClientRect();

      const cardCenterPosition = {
        x: containerBoundingRect.x + containerBoundingRect.width / 2,
        y: containerBoundingRect.y + containerBoundingRect.height / 2,
      };

      const xRotate = -(
        (props.mouse.position.x - cardCenterPosition.x) /
        CONSTRAIN
      ).toFixed(2);
      const yRotate = +(
        (props.mouse.position.y - cardCenterPosition.y) /
        CONSTRAIN
      ).toFixed(2);

      setCardRotation({ x: xRotate, y: yRotate });
    }
  }, [props.mouse.position]);

  useEffect(() => {
    updateCardRotation();
  }, [props.mouse.position, updateCardRotation]);

  const addScrollListener = useCallback((callback: () => void) => {
    window.addEventListener("scroll", callback);
  }, []);

  const resetRotation = useCallback(() => {
    setCardRotation({ x: 0.001, y: 0.001 });
  }, []);

  useEffect(() => {
    addScrollListener(resetRotation);
  }, [addScrollListener, resetRotation]);

  const mouseEnterHandler = () => {
    updateCardRotation();
    setCardIsActive(true);
  };

  const mouseLeaveHandler = () => {
    setCardIsActive(false);
  };

  return (
    <ScrollAnimation animation={props.animation}>
      <div
        className={`project-card__container${
          props.noMarginBottom
            ? " project-card__container--no-margin-bottom"
            : ""
        }`}
        ref={cardContainerRef}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <div
          className="project-card__card"
          ref={cardRef}
          style={{
            backgroundColor: props.backgroundColor,
            transform: cardIsActive
              ? `rotateX(${cardRotation.x}deg) rotateY(${cardRotation.y}deg)`
              : "rotateX(0.0001deg) rotateY(0.0001deg)",
          }}
        >
          <img
            className="project-card__card__logo"
            src={props.logo.src}
            alt={props.logo.alt}
            style={{}}
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
