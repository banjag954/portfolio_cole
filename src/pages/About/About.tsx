import React from "react";
import styled from "styled-components";

import IntroCole from "./IntroCole";
import IntroAbout from "./IntroAbout";
import PageOpening from "../PageOpening";
import Background from "../../components/Background";

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
  transform: perspective(1800px) translate3d(44%, 120%, -120px) rotateZ(90deg);
  opacity: 1;
  z-index: 1;

  transition: all 1.6s ease;
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

type Props = {
  cursorMouseOver?: () => void;
};

function About(props: Props) {
  return (
    <>
      <PageOpening
        title={"Hi, there"}
        emoji={"😀"}
        desc={"Hello, My Name is Cole Kim"}
      />

      <IntroAbout />

      <AboutWrap>
        <IntroCole />
        <IntroText>
          <span>UI&UX Product</span>
          <span>Designer.</span>
        </IntroText>
      </AboutWrap>

      <Background />
    </>
  );
}

export default About;
