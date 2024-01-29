import { Mouse } from "../utils/Mouse";

const ORANGE = "#FFA93B";
const FOLLOWER_DIAMETER = 24;

export default function MouseFollower(props: { mouse: Mouse }) {
  return (
    <span
      style={{
        backgroundColor: "transparent",
        border: `1px solid ${ORANGE}`,
        borderRadius: "50%",
        display: "block",
        position: "fixed",
        top: -FOLLOWER_DIAMETER / 2,
        left: -FOLLOWER_DIAMETER / 2,
        width: `${FOLLOWER_DIAMETER}px`,
        height: `${FOLLOWER_DIAMETER}px`,
        transform: `translate(${props.mouse.position.x}px, ${props.mouse.position.y}px)`,
        transition: "0.1s ease",
        zIndex: 1000,
        pointerEvents: "none",
      }}
    ></span>
  );
}
