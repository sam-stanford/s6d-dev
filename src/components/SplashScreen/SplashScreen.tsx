import { useCallback, useEffect, useRef } from "react";
import "./SplashScreen.scss";
import { SplashScreenText } from "./SplashScreenText";

// TODO: Prevent scroll

const INITIALISING_TEXT = "Initialising...";
const PROGRAM_TEXT = "sh sam_website.sh";

export default function SplashScreen(props: {
  showContentCallback: () => void;
}) {
  const splashScreenRef = useRef<HTMLDivElement>(null);
  const consoleRef = useRef<HTMLPreElement>(null); // textarea

  const timeouts: number[] = [];

  const addTimeout = (callback: () => void, delay: number) => {
    const timeout = window.setTimeout(callback, delay);
    timeouts.push(timeout);
  };

  // TODO: Tidy this up
  const initialise = useCallback(() => {
    let currentCharIndex = 0;
    const addCallingText = () => {
      if (consoleRef.current) {
        consoleRef.current.append(PROGRAM_TEXT.charAt(currentCharIndex));
        currentCharIndex++;
        if (currentCharIndex < PROGRAM_TEXT.length) {
          addTimeout(() => {
            addCallingText();
          }, Math.floor(Math.random() * 180));
        } else {
          if (consoleRef.current) {
            consoleRef.current.append("\n");
            currentCharIndex = 0;
            addTimeout(feedbacker, 1000 + Math.floor(Math.random() * 180));
          }
        }
      }
    };

    addCallingText();
  }, []);

  let i = 0;
  let currentRuntime = 0;
  var time = 1;
  function feedbacker() {
    if (consoleRef.current) {
      addConsoleLine(SplashScreenText[i], currentRuntime);
      if (time % 2 === 0) {
        i++;
        addConsoleLine(SplashScreenText[i], currentRuntime);
      }
      window.scrollTo(0, consoleRef.current.scrollHeight - window.innerHeight);
      i++;
      time = Math.floor(Math.random() * 4);
      currentRuntime += time;
      if (i < SplashScreenText.length - 2) {
        addTimeout(() => {
          feedbacker();
        }, time);
      } else {
        if (consoleRef.current) {
          addTimeout(displayInitialisingText, 800);
          addTimeout(hideSplashScreen, 2400);
        }
      }
    }
  }

  const displayInitialisingText = () => {
    if (consoleRef.current) {
      window.scrollTo(0, 0);
      consoleRef.current.innerHTML = INITIALISING_TEXT;
    }
  };

  const hideSplashScreen = () => {
    if (splashScreenRef.current) {
      splashScreenRef.current.style.display = "none";
    }
    props.showContentCallback();
    clearAllTimeouts();
  };

  const clearAllTimeouts = () => {
    timeouts.forEach((timeout) => {
      window.clearTimeout(timeout);
    });
  };

  const addConsoleLine = (lineToAdd: string, currentRuntime: number) => {
    if (consoleRef.current) {
      consoleRef.current.append(
        `[${(currentRuntime / 1000).toFixed(3)}] ${lineToAdd}\n`
      );
    }
  };

  useEffect(initialise, [initialise]);

  return (
    <div ref={splashScreenRef} className="splash-screen">
      <button onClick={hideSplashScreen} className="splash-screen__skip-button">
        Skip
      </button>
      <pre ref={consoleRef} className="splash-screen__console">
        sam@dev:~${" "}
      </pre>
    </div>
  );
}
