import { ReactNode } from "react";
import { AnimationType } from "./AnimationType";

export default function ScrollAnimation(props: {
  animation: AnimationType;
  duration?: number;
  delay?: number;
  children?: ReactNode;
  style?: React.CSSProperties;
  easing?: string;
  anchorElementClass?: string;
  className?: string;
}) {
  return (
    <div
      data-aos={props.animation}
      data-aos-duration={props.duration ? props.duration : 1000}
      data-aos-delay={props.delay ? props.delay : 0}
      data-aos-easing={props.easing}
      data-aos-anchor={
        props.anchorElementClass ? `.${props.anchorElementClass}` : undefined
      }
      style={props.style}
      className={props.className}
    >
      {props.children}
    </div>
  );
}
