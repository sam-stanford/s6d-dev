import "./PulsingButton.scss";

export default function PulsingButton(props: {
  top: string;
  left: string;
  color: string;
  saturation?: number;
  isHighlighted: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}) {
  return (
    <div
      className={`pulsing-dot${
        props.isHighlighted ? " pulsing-dot--active" : ""
      }`}
      style={{
        top: props.top,
        left: props.left,
      }}
    >
      <div
        className="pulsing-dot__pulse"
        style={{ backgroundColor: props.color }}
      ></div>

      <button
        className="pulsing-dot__dot"
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        style={{
          backgroundColor: props.color,
        }}
      ></button>
    </div>
  );
}
