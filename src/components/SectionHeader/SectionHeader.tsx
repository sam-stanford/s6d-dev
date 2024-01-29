import Title from "antd/lib/typography/Title";
import { ReactNode } from "react";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import { AnimationType } from "../ScrollAnimation/AnimationType";

const FONT_SIZE = "4em";

export default function SectionHeader(props: {
  className: string;
  children?: ReactNode;
  firstLine: string;
  secondLine?: string;
}) {
  let firstLineElement = (
    <ScrollAnimation
      animation={
        props.secondLine ? AnimationType.fadeRight : AnimationType.fadeUp
      }
      anchorElementClass={props.className}
    >
      <Title
        style={{
          textAlign: "center",
          marginBottom: "0",
          position: "relative",
          left: props.secondLine ? "-40px" : "0",
          fontSize: FONT_SIZE,
          fontWeight: "lighter",
        }}
        italic
      >
        {props.firstLine}
      </Title>
    </ScrollAnimation>
  );

  let secondLineElement = props.secondLine ? (
    <ScrollAnimation
      animation={AnimationType.fadeLeft}
      anchorElementClass={props.className}
    >
      <Title
        style={{
          textAlign: "center",
          marginTop: "0",
          position: "relative",
          left: "40px",
          fontSize: FONT_SIZE,
          fontWeight: "lighter",
        }}
        italic
      >
        {props.secondLine}
      </Title>
    </ScrollAnimation>
  ) : null;

  return (
    <div
      className={props.className}
      style={{
        padding: "4em 0",
      }}
    >
      {firstLineElement}
      {secondLineElement}
    </div>
  );
}
