import Title from "antd/lib/typography/Title";
import Content from "../../../components/Content/Content";
import PillButton from "../../../components/PillButton/PillButton";
import Section, {
  SectionBackgroundColor,
} from "../../../components/Section/Section";
import orangeArrow from "../../../assets/images/icons/arrow_right_orange.svg";
import ChangingWord from "../../../components/ChaningWord";
import { useRef } from "react";

const BLACK = "#262626";

const ADJECTIVES = [
  "agile",
  "adaptable",
  "balanced",
  "bright",
  "brilliant",
  "capable",
  "colourful",
  "considerate",
  "creative",
  "dilligent",
  "dynamic",
  "fabulous",
  "fantastic",
  "fearless",
  "friendly",
  "geeky",
  "happy",
  "helpful",
  "honest",
  "likable",
  "loving",
  "motivated",
  "nerdy",
  "passionate",
  "quick",
  "reliable",
  "resourceful",
  "skilled",
  "super",
  "talented",
];

export default function FooterSection() {
  const mainTextRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Section
        fullScreenHeight
        backgroundColor={SectionBackgroundColor.orange}
        overflowHidden
      >
        <Content fullScreenHeight centerContent shiftUpForTallScreen>
          <div
            ref={mainTextRef}
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Title
              style={{ fontSize: "5em", textAlign: "center", color: "white" }}
            >
              Want a
              <br />
              <ChangingWord
                words={ADJECTIVES}
                interval={600}
                fontColor={BLACK}
              />
              <br />
              software
              <br />
              engineer?
            </Title>
            <PillButton
              href={"https://www.linkedin.com/in/sam-stanford/"}
              text="Let's Connect"
              textColor={BLACK}
              backgroundColor="white"
              arrowIcon={orangeArrow}
              targetNewTab
            />
          </div>
        </Content>
      </Section>
    </>
  );
}
