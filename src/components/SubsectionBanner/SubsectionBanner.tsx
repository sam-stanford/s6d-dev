import "./SubsectionBanner.scss";

import { Col, Row } from "antd";
import Title from "antd/lib/typography/Title";

type SubsectionBannerProps = {
  image?: {
    src: string;
    alt: string;
  };
  title: string;
  subtitle: string;
  marginTop?: string;
  fontColor?: string;
  marginBottom?: string;
};

export default function SubsectionBanner(props: SubsectionBannerProps) {
  const textElements = (
    <>
      <Title
        level={1}
        style={{
          margin: "0 auto",
          fontWeight: "lighter",
          color: props.fontColor ? props.fontColor : undefined,
        }}
      >
        {props.title}
      </Title>
      <Title
        level={5}
        italic
        style={{
          margin: "0 auto 0 2px",
          fontWeight: "lighter",
          color: props.fontColor ? props.fontColor : undefined,
        }}
      >
        {props.subtitle}
      </Title>
    </>
  );

  if (props.image) {
    return (
      <div
        style={{
          marginTop: props.marginTop ? props.marginTop : "auto",
          marginBottom: props.marginBottom ? props.marginBottom : "auto",
        }}
      >
        <Row align="middle" justify="space-between">
          <Col xs={5} sm={3} md={3} lg={3} xl={3}>
            <img
              src={props.image.src}
              alt={props.image.alt}
              style={{ width: "100%", height: "auto" }}
            />
          </Col>
          <Col xs={18} sm={20} md={20} lg={20} xl={20}>
            {textElements}
          </Col>
        </Row>
      </div>
    );
  }

  return (
    <div
      style={{
        marginTop: props.marginTop ? props.marginTop : "auto",
        marginBottom: props.marginBottom ? props.marginBottom : "auto",
      }}
    >
      <Row align="middle" justify="space-between">
        <Col span={24}>{textElements}</Col>
      </Row>
    </div>
  );
}
