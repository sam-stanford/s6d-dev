import { useCallback, useEffect, useState } from "react";

export default function ChangingWord(props: {
  words: string[];
  interval: number;
  fontColor?: string;
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const randomiseWordIndex = useCallback(() => {
    let prevIndex = 0;

    const newIndex = Math.floor(Math.random() * props.words.length);
    if (newIndex === currentWordIndex || newIndex === prevIndex) {
      randomiseWordIndex();
      return;
    } else {
      prevIndex = newIndex;
      setCurrentWordIndex(newIndex);
    }
  }, [currentWordIndex, props.words.length]);

  useEffect(() => {
    const intervalID = setInterval(randomiseWordIndex, props.interval);
    return () => clearInterval(intervalID);
  }, [randomiseWordIndex, props.interval]);

  return (
    <span style={{ color: props.fontColor ? props.fontColor : undefined }}>
      {props.words[currentWordIndex]}
    </span>
  );
}
