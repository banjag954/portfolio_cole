import React, { useState } from "react";
import styled from "styled-components";

import IntroCole from "./IntroCole";
import IntroAbout from "./IntroAbout";
import PageOpening from "../../components/PageOpening";
import Background from "../../components/Background";

type Props = {
  cursorMouseOver?: () => void;
  actived?: boolean;
};

const AboutWrap = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  border: 8px solid #82ccdd;
  box-sizing: border-box;
  transform-style: preserve-3d;
  perspective: 100px;
  overflow: hidden auto;
`;

const IntroText = styled.div`
  position: absolute;
  top: 16vw;
  right: -24%;
  transform: ${(props: Props) =>
    props.actived
      ? "perspective(1800px) translate3d(44%, 120%, -120px) rotateZ(90deg)"
      : "perspective(1800px) translate3d(44%, 160%, -120px) rotateZ(90deg)"};
  opacity: 1;
  z-index: 1;

  transition: transform 1.2s ease-out;
  span {
    display: block;
    font-size: 64vw;
    line-height: 56vw;
    white-space: nowrap;
    font-family: "Fredoka One", cursive;
    color: rgba(0, 0, 0, 0.08);
    user-selet: none;
  }

  @media screen and (max-width: 1024px) {
    top: 32vw !important;

    span {
      font-size: 100vw !important;
      line-height: 88vw !important;
      color: rgba(0, 0, 0, 0.04);
    }
  }
`;

///////////////////////////////////////////////////////////////////////////////////////////////

function About(props: Props) {
  const [intro, setIntro] = useState(false);

  const handleIntro = () => {
    setIntro(!intro);
  };

  return (
    <>
      <PageOpening
        title={"Hi, there"}
        emoji={"😀"}
        desc={"Hello, My Name is Junsu Kim"}
      />

      <IntroAbout introClick={handleIntro} />

      <AboutWrap>
        <IntroCole />
        <IntroText actived={intro}>
          <span>UI&UX Product</span>
          <span>Designer.</span>
        </IntroText>
      </AboutWrap>

      <Background />
    </>
  );
}

export default About;
