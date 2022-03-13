import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Background from "../components/Background";

const OpeningBG = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  z-index: 10000;
  transition: all 0.56s ease;

  &.openPage {
    display: block;
    visibility: visible;
  }

  &.closePage {
    display: none;
    visibility: hidden;
  }

  .BG__TextWrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    user-select: none;
    @keyframes TextAni {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    .Text__Title {
      display: block;
      font-family: "Lobster", cursive;
      font-size: 36px;
      color: #2b2b2b;
      margin-bottom: 16px;
      animation: TextAni 0.8s ease-in;
    }
    .Text__Desc {
      display: block;
      font-family: "Gothic A1", cursive;
      font-size: 20px;
      color: #6b6b6b;
      animation: TextAni 2.4s ease-in;
    }
  }

  .BG__DecoWrap {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 560px;
    height: 560px;
    user-select: none;
    .topRight {
      position: absolute;
      top: 0;
      right: 0;
    }
    .topLeft {
      position: absolute;
      top: 0;
      left: 0;
    }

    .open_01 {
      width: 96px;
      transform: translate(-40px, 80px);
      animation: open01 1.6s ease-out;
      @keyframes open01 {
        from {
          transform: translate(80px, -80px) rotate(360deg);
          opacity: 0;
        }
        to {
          transform: translate(-40px, 80px) rotate(0deg);
          opacity: 1;
        }
      }
    }
    .open_02 {
      width: 80px;
      transform: translate(32px, 264px);
      animation: open02 2.4s ease-out;
      @keyframes open02 {
        from {
          transform: translate(120px, 264px) rotate(480deg);
          opacity: 0;
        }
        25% {
          opacity: 1;
        }
        to {
          transform: translate(32px, 264px) rotate(0deg);
          opacity: 1;
        }
      }
    }
    .open_03 {
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translate(-120px, -64px);
      width: 88px;
      animation: open03 2.4s ease-out;
      @keyframes open03 {
        from {
          transform: translate(-80px, 0px) rotate(90deg);
          opacity: 0;
        }
        25% {
          opacity: 1;
        }
        to {
          transform: translate(-120px, -64px) rotate(0deg);
          opacity: 1;
        }
      }
    }

    .open_04 {
      position: absolute;
      bottom: 0;
      left: 0;
      transform: translate(40px, -64px);
      width: 104px;
      animation: open04 2.4s ease-out;
      @keyframes open04 {
        from {
          transform: translate(-104px, 40px) rotate(360deg);
          opacity: 0;
        }
        to {
          transform: translate(40px, -64px) rotate(0deg);
          opacity: 1;
        }
      }
    }

    .open_05 {
      transform: translate(-72px, 280px);
      width: 104px;
      animation: open05 3.2s ease-out;
      @keyframes open05 {
        from {
          opacity: 0;
        }
        75% {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    }

    .open_06 {
      transform: translate(56px, 72px);
      width: 88px;
      z-index: 1;
      animation: open06 1.6s ease-out;
      @keyframes open06 {
        from {
          transform: translate(-120px, -160px) rotate(240deg);
          opacity: 0;
        }

        to {
          transform: translate(56px, 72px) rotate(0deg);
          opacity: 1;
        }
      }
    }

    .open_07 {
      transform: translate(40px, 56px);
      width: 72px;
      animation: open07 2.4s ease-out;
      @keyframes open07 {
        from {
          opacity: 0;
        }
        72% {
          transform: translate(32px, 48px);
          opacity: 0;
        }
        to {
          transform: translate(40px, 56px);
          opacity: 1;
        }
      }
    }
  }
`;

const IntroBackgroundOutline = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 10000;
  border: 8px solid #82ccdd;
  box-sizing: border-box;
`;

const IntroBackground = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -5;
  background-image: url("https://banjag954.github.io/portfolio_cole/openingBg.jpg");
  background-size: 100vw;
  background-repeat: repeat;
  background-position: center;
  width: 100vw;
  height: 100%;
  background-color: #fff;
  transform: scale(1.2);

  animation: openBackground 5.6s linear;
  @keyframes openBackground {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.2);
    }
  }

  @media screen and (max-width: 560px) {
    background-image: none;
    animation: none;
  }
`;

type Props = {
  title?: string;
  desc?: string;
  emoji?: React.ReactNode;
};

export default function PageOpening(props: Props) {
  const [close, setClose] = useState(true);
  const [closeTag, setCloseTag] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setClose(false);
    }, 4000);
    setTimeout(() => {
      setCloseTag(false);
    }, 4400);
  });

  return (
    <OpeningBG
      className={closeTag === true ? "openPage" : "closePage"}
      style={close === true ? { opacity: 1 } : { opacity: 0 }}
    >
      <section className="BG__TextWrap">
        <span className="Text__Title">
          {props.title}
          <span className="Text__Emoji" role="img" aria-label="fingure">
            {props.emoji}
          </span>
          <br />
        </span>
        <span className="Text__Desc">{props.desc}</span>
      </section>

      <section className="BG__DecoWrap">
        <img className="topRight open_01" src="rightTop-circle.svg" alt="" />
        <img className="topRight open_02" src="rightCenter-circle.svg" alt="" />
        <img className="open_03" src="rightBottom-shape.svg" alt="" />
        <img className="open_04" src="leftBottom-circle.svg" alt="" />
        <img className="topLeft open_05" src="leftCenter-shape.svg" alt="" />
        <img className="topLeft open_06" src="leftTop-circle.svg" alt="" />
        <img className="topLeft open_07" src="/leftTopT.svg" alt="123" />
      </section>
      <IntroBackgroundOutline />
      <Background />
      <IntroBackground />
    </OpeningBG>
  );
}
