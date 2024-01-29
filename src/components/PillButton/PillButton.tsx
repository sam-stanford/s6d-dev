import "./PillButton.scss";

import Title from "antd/lib/typography/Title";

export default function PillButton(props: {
  targetNewTab?: boolean;
  href: string;
  text: string;
  textColor: string;
  backgroundColor: string;
  arrowIcon: string;
}) {
  return (
    <a
      href={props.href}
      target={props.targetNewTab ? "_blank" : undefined}
      rel="noreferrer"
    >
      <button
        className="pill-button"
        style={{
          backgroundColor: props.backgroundColor,
        }}
      >
        <Title
          className="pill-button__text"
          level={5}
          style={{
            color: props.textColor,
          }}
        >
          {props.text}
          <img
            className="pill-button__arrow"
            src={props.arrowIcon}
            alt="right arrow"
          />
        </Title>
      </button>
    </a>
  );
}
