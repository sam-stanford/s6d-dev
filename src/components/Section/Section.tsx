import "./Section.scss";

import React from "react";

export enum SectionPaddingSize {
  large = "lg",
  medium = "md",
  small = "sm",
  none = "none",
}

export enum SectionBackgroundColor {
  grey = "grey",
  orange = "orange",
}

type SectionProps = {
  children?: React.ReactNode;
  backgroundColor?: SectionBackgroundColor;
  fullScreenHeight?: boolean;
  overflowHidden?: boolean;
  extraPaddingBottom?: boolean;
  classNameModifiers?: string[];
};

export default function Section(props: SectionProps) {
  return (
    <div data-scroll-section className={getClassesFromProps(props)}>
      {props.children}
    </div>
  );
}

function getClassesFromProps(props: SectionProps) {
  return `section${
    props.classNameModifiers
      ? ` ${props.classNameModifiers.map(
          (modifier) => `section--${modifier} `
        )}`
      : ""
  }${props.fullScreenHeight ? " section--fullscreen" : ""}${
    props.overflowHidden ? " section--overflow-hidden" : ""
  }${props.backgroundColor ? ` section--${props.backgroundColor}` : ""}${
    props.extraPaddingBottom ? " section--extra-padding-bottom" : ""
  }`;
}
