import { Steps, Divider } from "antd";

const { Step } = Steps;

export default function ProgressDots() {
  return (
    <>
      <Steps progressDot current={1} direction="vertical">
        <Step />
        <Step />
      </Steps>
    </>
  );
}
