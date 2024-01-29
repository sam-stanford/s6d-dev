import "./Content.scss";

import React from "react";

export default function Content(props: {
  children?: React.ReactNode;
  fullScreenHeight?: boolean;
  centerContent?: boolean;
  shiftUpForTallScreen?: boolean;
}) {
  return (
    <div
      className={`content${
        props.fullScreenHeight ? " content--full-screen-height" : ""
      }${props.centerContent ? " content--centre-children" : ""}${
        props.shiftUpForTallScreen ? " content--shift-up" : ""
      }`}
    >
      {props.children}
    </div>
  );
}
