import "./ExperienceCard.scss";

import { Card, Col, Row } from "antd";
import Title from "antd/lib/typography/Title";
import { ReactNode } from "react";
import Text from "antd/lib/typography/Text";

export default function ExperienceCard(props: {
  textColor?: string;
  logoSrc: string;
  logoAlt: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
  isHighlighted: boolean;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}) {
  return (
    <Card
      style={{
        margin: "1em 0",
      }}
      className={`experience-card${
        props.isHighlighted ? " experience-card--highlighted" : ""
      }${props.className ? ` ${props.className}` : ""}`}
      tabIndex={-1}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <Row style={{ marginBottom: "10px" }}>
        <Col
          span={4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: 0,
          }}
        >
          <img
            className="experience-card__icon"
            src={props.logoSrc}
            alt={props.logoAlt}
          />
        </Col>
        <Col span={20} style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
              flexDirection: "column",
              marginLeft: "10px",
            }}
          >
            <Title
              level={3}
              className="experience-card__text"
              style={{ margin: 0 }}
            >
              {props.title}
            </Title>
            <Title
              level={5}
              italic
              className="experience-card__text"
              style={{
                margin: 0,
                fontWeight: "lighter",
              }}
            >
              {props.subtitle}
            </Title>
          </div>
        </Col>
      </Row>
      <Text className="experience-card__text">{props.children}</Text>
    </Card>
  );
}
