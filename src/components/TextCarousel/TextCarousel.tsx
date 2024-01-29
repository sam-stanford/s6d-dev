import "./TextCarousel.scss";
import { useCallback, useEffect, useState } from "react";

import { Carousel, Col, Row } from "antd";
import Title from "antd/lib/typography/Title";
import { ReactNode, useRef } from "react";
import { debounce } from "lodash";

export type TextCarouselSlide = {
  title: string;
  content: ReactNode;
};

export default function TextCarousel(props: { slides: TextCarouselSlide[] }) {
  const [shouldEqualiseHeights, setShouldEqualiseHeights] = useState(false);

  const slidesRef = useRef<HTMLDivElement[]>([]);

  const equaliseSlideHeights = useCallback(() => {
    let tallestHeight = 0;
    slidesRef.current.forEach((slideRef) => {
      if (slideRef.offsetHeight > tallestHeight) {
        tallestHeight = slideRef.offsetHeight;
      }
    });

    slidesRef.current.forEach((slideRef) => {
      slideRef.style.minHeight = `${tallestHeight}px`;
    });
  }, []);
  useEffect(equaliseSlideHeights, [equaliseSlideHeights]);

  const resetSlideHeights = useCallback(() => {
    slidesRef.current.forEach((slideRef) => {
      slideRef.style.minHeight = "0";
    });
  }, []);

  const addWindowResizeListener = useCallback(() => {
    window.addEventListener(
      "resize",
      debounce(() => {
        resetSlideHeights();
        setShouldEqualiseHeights(true);
      }, 100)
    );
  }, [resetSlideHeights]);
  useEffect(addWindowResizeListener, [addWindowResizeListener]);

  useEffect(() => {
    if (shouldEqualiseHeights) {
      setTimeout(() => {
        equaliseSlideHeights();
        setShouldEqualiseHeights(false);
      }, 50);
    }
  }, [shouldEqualiseHeights, equaliseSlideHeights]);

  return (
    <Carousel
      autoplay
      pauseOnDotsHover
      autoplaySpeed={4000}
      swipeToSlide
      draggable
      speed={800}
      dots={{ className: "text-carousel__dots" }}
      effect="fade"
    >
      {props.slides.map((slide, index) => (
        <div>
          <div
            className="text-carousel__slide"
            ref={(ref) => {
              if (ref) {
                slidesRef.current.push(ref);
              }
            }}
          >
            <Row
              align="middle"
              justify="space-between"
              style={{ width: "100%" }}
            >
              <Col sm={24} md={11}>
                <Title
                  className="text-carousel__slide__title"
                  style={{ fontWeight: "lighter", width: "100%" }}
                >
                  {slide.title}
                </Title>
              </Col>
              <Col sm={24} md={11}>
                {slide.content}
              </Col>
            </Row>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
