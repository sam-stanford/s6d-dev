import { AnimationType } from "../ScrollAnimation/AnimationType";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import "./FloatingButton.scss";

export enum FloatingButtonOutlineSize {
  small = "small-outline",
  medium = "medium-outline",
  large = "large-outline",
}

export enum FloatingButtonAnimationDelay {
  none = "none",
  short = "short-animation-delay",
  long = "long-animation-delay",
}

export default function FloatingButton(props: {
  className?: string;
  logo: string;
  backgroundColor: string;
  outlineSize: FloatingButtonOutlineSize;
  animationDelay: FloatingButtonAnimationDelay;
  link: string;
  anchorTarget?: React.HTMLAttributeAnchorTarget;
  popAnimationDelay?: number;
}) {
  const buttonClasses = generateButtonClasses(
    props.outlineSize,
    props.className
  );
  const containerClasses = generateContainerClasses(props.animationDelay);

  return (
    <div className={containerClasses}>
      <a
        href={props.link}
        className={buttonClasses}
        target={props.anchorTarget}
        style={{
          backgroundColor: props.backgroundColor,
        }}
      >
        <ScrollAnimation
          animation={AnimationType.zoomIn}
          easing="ease-out-back"
          delay={props.popAnimationDelay}
          duration={400}
        >
          <img src={props.logo} alt="LinkedIn logo" />
        </ScrollAnimation>
      </a>
    </div>
  );
}

function generateButtonClasses(
  outlineSize: FloatingButtonOutlineSize,
  className?: string
) {
  return `floating-button__button floating-button__button--${outlineSize}${
    className ? ` ${className}` : ""
  }`;
}

function generateContainerClasses(
  animationDelay: FloatingButtonAnimationDelay
) {
  return `floating-button__container${
    animationDelay !== FloatingButtonAnimationDelay.none
      ? ` floating-button__container--${animationDelay}`
      : ""
  }`;
}
