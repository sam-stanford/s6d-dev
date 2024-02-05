import { useCallback, useEffect, useState } from "react";

import HeroSection from "./sections/HeroSection/HeroSection";
import EducationSection from "./sections/EducationSection";
import ProjectsSection from "./sections/ProjectsSection";
import FooterSection from "./sections/FooterSection";
import ExperienceSection from "./sections/ExperienceSection";
import SkillsSection from "./sections/SkillsSection";
import { debounce } from "lodash";
import AboutSection from "./sections/AboutSection";
import Aos from "aos";

export default function Homepage() {
  const [mouse, setMouse] = useState({
    position: { x: 0, y: 0 },
  });
  const updateMousePosition = (mouseMoveEvent: {
    clientX: number;
    clientY: number;
  }) => {
    setMouse({
      position: {
        x: mouseMoveEvent.clientX,
        y: mouseMoveEvent.clientY,
      },
    });
  };
  const debouncedUpdateMousePosition = debounce(updateMousePosition, 0);

  const setupAosAndBindToResize = useCallback(() => {
    Aos.init();
    window.addEventListener("resize", () => {
      Aos.init();
    });
  }, []);

  useEffect(() => {
    setupAosAndBindToResize();
  });

  return (
    <div
      data-scroll-container
      data-scroll-section-inview
      onMouseMove={debouncedUpdateMousePosition}
      style={{ overflow: "hidden" }}
    >
      <HeroSection />
      <AboutSection mouse={mouse} />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <FooterSection />
    </div>
  );
}
