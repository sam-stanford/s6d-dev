import "./InfoCard.scss";

import { ReactNode } from "react";
import Title from "antd/lib/typography/Title";
import { AnimationType } from "../ScrollAnimation/AnimationType";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import { Col, Row } from "antd";

export enum InfoCardColor {
  brown = "brown",
  blue = "blue",
}

export default function InfoCard(props: {
  icon: {
    src: string;
    alt: string;
  };
  heading: string;
  content?: ReactNode;
  animation: AnimationType;
  iconColor?: InfoCardColor;
}) {
  return (
    <ScrollAnimation animation={props.animation} className="info-card__wrapper">
      <div className="info-card">
        <div className="info-card__image">
          <div
            className={`info-card__image__circle${
              props.iconColor
                ? ` info-card__image__circle--${props.iconColor}`
                : ""
            }`}
          >
            <ScrollAnimation
              animation={AnimationType.zoomIn}
              easing="ease-out-back"
              delay={500}
              duration={400}
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                className="info-card__image__icon"
                src={props.icon.src}
                alt={props.icon.alt}
              />
            </ScrollAnimation>
          </div>
        </div>
        <div className="info-card__text">
          <Title level={4} className="info-card__text__heading">
            {props.heading}
          </Title>
          {props.content}
        </div>
      </div>
    </ScrollAnimation>
  );
}
