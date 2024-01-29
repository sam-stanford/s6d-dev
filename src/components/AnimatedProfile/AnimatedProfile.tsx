import "./AnimatedProfile.scss";

import hair from "../../assets/images/sam_cartoon/hair.svg";
import nose from "../../assets/images/sam_cartoon/nose.svg";
import eyeBacks from "../../assets/images/sam_cartoon/eye-backs.svg";
import smile from "../../assets/images/sam_cartoon/smile.svg";
import { useCallback, useEffect, useRef, useState } from "react";
import { debounce } from "lodash";
import { Mouse } from "../../utils/Mouse";

const MAXIMUM_EYE_MOVEMENT = 4;
const EYE_MOVEMENT_SCALE = 0.015;

export default function AnimatedProfile(props: { mouse: Mouse }) {
  const [eyesWrapperLocation, setEyesWrapperLocation] = useState({
    x: 0,
    y: 0,
  });

  const pupilsContainerRef = useRef<HTMLDivElement>(null);

  const updateEyesWrapperLocation = useCallback(() => {
    if (pupilsContainerRef.current) {
      const pupilsContainerBoundingRect =
        pupilsContainerRef.current.getBoundingClientRect();
      setEyesWrapperLocation({
        x:
          pupilsContainerBoundingRect.x + pupilsContainerBoundingRect.width / 2,
        y:
          pupilsContainerBoundingRect.y +
          pupilsContainerBoundingRect.height / 2,
      });
    }
  }, []);

  const initaliseElement = useCallback(() => {
    const debounceUpdateEyesWrapperLocation = debounce(
      updateEyesWrapperLocation,
      1
    );
    updateEyesWrapperLocation();
    window.addEventListener("scroll", debounceUpdateEyesWrapperLocation);
    window.addEventListener("resize", debounceUpdateEyesWrapperLocation);
  }, [updateEyesWrapperLocation]);

  useEffect(initaliseElement, [initaliseElement]);

  const updateEyesTransform = useCallback(() => {
    let newX = props.mouse.position.x - eyesWrapperLocation.x;
    let newY = props.mouse.position.y - eyesWrapperLocation.y;

    newX = EYE_MOVEMENT_SCALE * newX;
    newY = EYE_MOVEMENT_SCALE * newY;

    newX = newX > MAXIMUM_EYE_MOVEMENT ? MAXIMUM_EYE_MOVEMENT : newX;
    newX = newX < -MAXIMUM_EYE_MOVEMENT ? -MAXIMUM_EYE_MOVEMENT : newX;
    newY = newY > MAXIMUM_EYE_MOVEMENT ? MAXIMUM_EYE_MOVEMENT : newY;
    newY = newY < -MAXIMUM_EYE_MOVEMENT ? -MAXIMUM_EYE_MOVEMENT : newY;

    if (pupilsContainerRef.current) {
      pupilsContainerRef.current.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
    }
  }, [props.mouse.position, eyesWrapperLocation]);

  useEffect(() => {
    updateEyesTransform();
  }, [props.mouse.position, updateEyesTransform]);

  return (
    <div className="animated-profile" style={{ transform: "scale(0.8)" }}>
      <div>
        <img src={hair} alt="cartoon hair" className="animated-profile__hair" />
        <div className="animated-profile__face">
          <img
            src={nose}
            alt="cartoon nose"
            className="animated-profile__face__nose"
          />
          <div className="animated-profile__face__eyes-wrapper">
            <img
              src={eyeBacks}
              alt="cartoon eyes"
              className="animated-profile__face__eyes"
            />
          </div>
          <div
            ref={pupilsContainerRef}
            className="animated-profile__face__pupils-container"
          >
            <div
              className="animated-profile__face__pupil"
              style={{ left: "84px" }}
            />
            <div
              className="animated-profile__face__pupil"
              style={{ right: "84px" }}
            />
          </div>
          <img
            src={smile}
            alt="cartoon smile"
            className="animated-profile__face__smile"
          />
        </div>
      </div>
      <div className="animated-profile__shadow" />
    </div>
  );
}
