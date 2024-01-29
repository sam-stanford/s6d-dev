import Title from "antd/lib/typography/Title";
import Content from "../../../components/Content/Content";
import PillButton from "../../../components/PillButton/PillButton";
import Section, {
  SectionBackgroundColor,
} from "../../../components/Section/Section";
import orangeArrow from "../../../assets/images/icons/arrow_right_orange.svg";
import ChangingWord from "../../../components/ChaningWord";
import { useCallback, useRef } from "react";

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

const MAX_OFFSET = 200;

export default function FooterSection() {
  const mainTextRef = useRef<HTMLDivElement>(null);

  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };

  const updatePosition = useCallback(() => {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const docHeight = getDocHeight();

    const footerPageRatio = windowHeight / docHeight;

    const totalDocScrollLength = docHeight - windowHeight;
    const scrollPostion = scrollTop / totalDocScrollLength;

    const percentageOfFooterScrolled =
      (scrollPostion - (1 - footerPageRatio)) / footerPageRatio;

    let newOffset = MAX_OFFSET * (1 - percentageOfFooterScrolled) * 0.3;
    newOffset = newOffset > MAX_OFFSET ? MAX_OFFSET : newOffset;

    if (mainTextRef.current) {
      mainTextRef.current.style.transform = `translate3d(0,${-newOffset}%,0)`;
    }
  }, []);

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
              // top: "-100px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              //   transform: `translate3d(0,0,0)`,
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
              href={"https://www.linkedin.com/in/sam-stanford/"} /* TODO */
              text="Let's Connect"
              textColor={BLACK}
              backgroundColor="white"
              arrowIcon={orangeArrow}
              targetNewTab
            />
          </div>

          {/* <div
            style={{
              position: "absolute",
              bottom: "2em",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <a
                href="https://www.linkedin.com/in/sam-stanford/"
                target="_blank"
                rel="noreferrer"
              >
                <Title level={5} underline style={{ marginRight: "20px" }}>
                  LinkedIn
                </Title>
              </a>
              <a href="/Sam_Stanford_CV.pdf" target="_blank" rel="noreferrer">
                <Title level={5} underline>
                  CV
                </Title>
              </a>
            </div>
            {/* <Popover trigger="hover">
              <Title level={5} underline style={{ cursor: "pointer" }}>
                Designed &amp; Developed By Me
              </Title>
            </Popover>
          </div> */}
        </Content>
      </Section>
    </>
  );
}
