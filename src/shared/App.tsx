import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { isBrowser, isMobile } from "react-device-detect";

import Header from "../components/Header";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

import "./PageTransition.css";

const CursorWrap = styled.section`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  height: 100vh;
  overflow: auto;
  cursor: none;

  #CursorMain {
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 50%;
    pointer-events: none;
    position: absolute;
    z-index: 100000;

    &.CursorDeco {
      transform: scale(1);
      transition: all 0.16s ease;
      &:after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        display: block;
        border: 1px solid rgba(136, 84, 208, 0.24);
        width: 16px;
        height: 16px;
        border-radius: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  #CursorTail {
    width: 16px;
    height: 16px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    pointer-events: none;
    position: absolute;
    z-index: 100000;
    transition: background-color 0.16s ease;
  }
`;

console.log(
  "%cHello, thank you for visiting my website",
  "background-color:#fff; color:#82ccdd; font-size:14px; height: 32px; line-height: 32px; padding: 0 8px;"
);
console.log(
  "%cJunsu Kim, banjag954@naver.com",
  "background-color:#60a3bc; color:#ffffff; font-size:16px; height: 40px; line-height: 40px; padding: 0 8px;"
);

function App() {
  const [xMain, setXMain] = useState(0);
  const [yMain, setYMain] = useState(0);
  const [xTrailing, setXTrailing] = useState(0);
  const [yTrailing, setYTrailing] = useState(0);
  const [circleBorder, setCircleBorder] = useState("2px solid #778ca3");
  const [circleBorderScale, setCircleBorderScale] = useState(
    "translate(-50%, -50%) scale(1)"
  );
  const [tailColor, setTailColor] = useState("#82ccdd");

  const cursorMouseMove = (e: any) => {
    // const x = e.clientX;
    // const y = e.clientY;
    // 같은 표시
    const { clientX, clientY } = e;
    setXMain(clientX);
    setYMain(clientY);
    // () => {
    setTimeout(() => {
      setXTrailing(clientX);
      setYTrailing(clientY);
    }, 10);
    // };
  };

  const cursorMouseDown = () => {
    setTailColor("#a55eea");
    setCircleBorder("1px solid #a29bfe");
    setCircleBorderScale("translate(-50%, -50%) scale(1.6)");
  };

  const cursorMouseUp = () => {
    setTailColor("#82ccdd");
    setCircleBorder("2px solid #778ca3");
    setCircleBorderScale("translate(-50%, -50%) scale(1)");
  };

  // 로고에 마우스가 얹히면, 로고의 크기가 1.6배 증가한다.
  const cursorMouseOver = () => {
    setTailColor("#eb4d4b");
    setCircleBorder("1px solid #2c3e50");
    setCircleBorderScale("translate(-50%, -50%) scale(1.6)");
  };

  const cursorMouseOut = () => {
    setTailColor("#82ccdd");
    setCircleBorder("2px solid #778ca3");
    setCircleBorderScale("translate(-50%, -50%) scale(1)");
  };

  const setScreenSize: any = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  useEffect(() => {
    setScreenSize();
  });

  const location = useLocation();

  if (isMobile) {
    return (
      <>
        <Header cursorMouseOver={cursorMouseOver} />
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} timeout={200}>
            <Routes location={location}>
              <Route
                path="/*"
                element={<Home cursorMouseOver={cursorMouseOver} />}
              />
              <Route
                path="/about"
                element={<About cursorMouseOver={cursorMouseOver} />}
              />
              <Route
                path="/contact"
                element={<Contact cursorMouseOver={cursorMouseOver} />}
              />
              <Route element={<Home />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </>
    );
  }
  if (isBrowser) {
    return (
      <>
        <CursorWrap
          onMouseMove={(e) => cursorMouseMove(e)}
          onMouseDown={cursorMouseDown}
          onMouseUp={cursorMouseUp}
          onMouseOut={cursorMouseOut}
        >
          <div
            id="CursorMain"
            className={
              circleBorder === "1px solid #a29bfe" ? "CursorDeco" : undefined
            }
            style={{
              left: xMain,
              top: yMain,
              border: circleBorder,
              transform: circleBorderScale,
            }}
          />
          <div
            id="CursorTail"
            style={{
              left: xTrailing,
              top: yTrailing,
              backgroundColor: tailColor,
            }}
          />

          <Header cursorMouseOver={cursorMouseOver} />
          <TransitionGroup>
            <CSSTransition className="my-node" key={location.key} timeout={200}>
              <Routes location={location}>
                <Route
                  path={process.env.PUBLIC_URL + "/*"}
                  element={<Home cursorMouseOver={cursorMouseOver} />}
                />
                <Route
                  path="/about"
                  element={<About cursorMouseOver={cursorMouseOver} />}
                />
                <Route
                  path="/contact"
                  element={<Contact cursorMouseOver={cursorMouseOver} />}
                />
                <Route element={<Home />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </CursorWrap>
      </>
    );
  }
}

export default App;
