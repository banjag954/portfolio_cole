import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

///////////////////////////////////////////////////////////////////////////////////////////////

const IntroWrap = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  opacity: ${(props) => (props.actived ? 0 : 1)};
  transition: opacity 3.2s ease;
`;

const AboutProfile = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  user-select: none;

  .circle01 {
    position: absolute;
    width: 64px;
    animation: circle01 6.4s ease infinite;
    @keyframes circle01 {
      from {
        top: -60px;
        right: -440px;
        transform: rotate(0deg);
      }
      25% {
        top: -60px;
        right: -310px;
        transform: rotate(360deg);
      }
      50% {
        top: 60px;
        right: -310px;
        transform: rotate(720deg);
      }
      75% {
        top: -60px;
        right: -310px;
        transform: rotate(360deg);
      }
      to {
        top: -60px;
        right: -440px;
        transform: rotate(0deg);
      }
    }
  }

  .circle02 {
    position: absolute;
    top: -8px;
    right: -420px;
    width: 88px;
    animation: circle02 2.4s ease infinite;
    @keyframes circle02 {
      from {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(8deg);
      }
      to {
        transform: rotate(0deg);
      }
    }
  }

  .circle03 {
    position: absolute;
    top: 240px;
    left: 32px;
    width: 96px;
    animation: circle03 4s ease infinite;
    @keyframes circle03 {
      from {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(8deg);
      }
      to {
        transform: rotate(0deg);
      }
    }
  }

  .circle04 {
    position: absolute;
    top: 248px;
    right: -470px;
    width: 64px;
    animation: circle04 3.2s ease infinite;
    @keyframes circle04 {
      from {
        transform: scale(0);
      }
      16% {
        transform: scale(1.1);
      }
      20% {
        transform: scale(0.9);
      }
      24% {
        transform: scale(1.1);
      }
      28% {
        transform: scale(1);
      }
      84% {
        transform: scale(1);
      }
      to {
        transform: scale(0);
      }
    }
  }

  .coleImg {
    position: absolute;
    top: -190px;
    right: -440px;
    width: 376px;
    user-select: none;
    border-radius: 4px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
    z-index: -1;
  }
`;

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

const trans1 = (x, y) => `translate3d( ${x / 10}px, ${y / 10}px, 0)`;

const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 8 - 250}px,${y / 8 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 8}px,${y / 8}px,0)`;

const MyImg = (props) => {
  const [ani, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <>
      <IntroWrap
        actived={props.bgDeco}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <AboutProfile>
          <animated.div
            style={{
              transform: ani.xy.interpolate(trans3),
            }}
          >
            <img className="circle01" src="introPhoto-circle.svg" alt="" />
          </animated.div>
          <animated.div
            style={{
              transform: ani.xy.interpolate(trans2),
            }}
          >
            <img className="circle02" src="introPhoto-triCircle.svg" alt="" />
          </animated.div>
          <animated.div
            style={{
              transform: ani.xy.interpolate(trans4),
            }}
          >
            <img className="circle03" src="introPhoto-rect.svg" alt="" />
          </animated.div>
          <animated.div
            style={{
              transform: ani.xy.interpolate(trans1),
            }}
          >
            <img
              className="circle04"
              src="introPhoto-bottomCircle.svg"
              alt=""
            />
          </animated.div>
          <animated.img
            className="coleImg"
            src="https://banjag954.github.io/portfolio_cole/col@3x.jpg"
            alt="coleImg"
            style={{
              transform: ani.xy.interpolate(trans1),
            }}
          />
        </AboutProfile>
      </IntroWrap>
    </>
  );
};

export default MyImg;
