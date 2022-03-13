import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import Background from "../../components/Background";
import PageOpening from "../PageOpening";
import MyImg from "./ContactPhoto";

type Props = {
  cursorMouseOver?: () => void;
};

type StyleProps = {
  actived: boolean;
};

const ContactWrap = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 50vw;
  height: calc(var(--vh, 1vh) * 100);
  overflow: auto;
  opacity: ${(props: StyleProps) => (props.actived ? 0 : 1)};
  transition: opacity 3.2s ease;

  .Intro {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
    transition: all 0.56s ease;

    .Intro__Name {
      font-family: "Gothic A1", sans-serif;
      font-size: 16px;
      font-weight: 700;
      color: #60a3bc;
      background: #60a3bc3d;
      padding: 10px 12px 6px;
      margin: 56px 0 16px;
    }
    .Intro__Job {
      font-family: "Gothic A1", sans-serif;
      font-size: 48px;
      font-weight: 700;
      line-height: 1.4;
      color: #2b2b2b;
    }

    .Intro__Channel {
      margin: 16px 0 24px;
      padding: 0 8px;
      display: flex;
      justify-content: flex-start;
    }

    .Intro__Others {
      margin: 8px 0;
      display: block;
      padding: 10px 12px 6px;
      font-family: "Gothic A1", sans-serif;
      font-size: 14px;
      font-weight: 500;
      color: #4b4b4b;
      background: rgba(0, 0, 0, 0.08);
      transition: background-color 0.24s ease;

      &:hover {
        background: rgba(0, 0, 0, 0.16);
      }
    }
  }

  @media screen and (max-width: 1024px) {
    width: 100vw;
    .Intro__Job {
      font-size: 40px !important;
    }
  }
`;

const BackgroundDeco = styled.section`
  position: absolute;
  bottom: 32px;
  right: 48px;
  text-align: right;
  font-size: 18vw;
  color: ${(props: StyleProps) =>
    props.actived ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.04)"};
  font-family: "Lobster", cursive;
  transition: color ease-in-out 0.64s;
  z-index: -1;

  @media screen and (max-width: 1024px) {
    bottom: 50%;
    right: 50%;
    transform: translate(50%, 50%);
    text-align: center;
    font-size: 20vh !important;
  }
`;

const TopCircle = styled.div`
  position: absolute;
  top: 112px;
  left: 48px;
  transition: all 0.4s ease-in-out;
  transform: ${(props: StyleProps) =>
    props.actived ? "scale(1)" : "scale(0)"};

  .TopCircle__Icon {
    width: 8vw;
    height: 8vw;
    animation: pulse 5.6s linear infinite;
    @keyframes pulse {
      from {
        transform: scale3d(1, 1, 1);
      }
      50% {
        transform: scale3d(1.2, 1.2, 1.2);
      }
      to {
        transform: scale3d(1, 1, 1);
      }
    }
  }

  @media screen and (max-width: 1024px) {
    top: 72px !important;
    left: 16px !important;
  }
`;

const BottomCircle = styled.div`
  position: absolute;
  bottom: 72px;
  right: 72px;
  transform: ${(props: StyleProps) =>
    props.actived ? "scale(1)" : "scale(0)"};
  transition: all 0.24s ease-in-out;

  .TopCircle__Icon {
    width: 8vw;
    height: 8vw;
    animation: pulse 4s ease infinite;
    @keyframes pulse {
      from {
        transform: scale3d(1, 1, 1);
      }
      50% {
        transform: scale3d(1.1, 1.1, 1.1);
      }
      to {
        transform: scale3d(1, 1, 1);
      }
    }
  }

  @media screen and (max-width: 1024px) {
    bottom: 16px !important;
    right: 16px !important;
  }
`;

const ChannelIcon = styled.a`
  margin-right: 16px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  background: #fafafa;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  transition: all 0.24s ease;
  cursor: none;
  &:hover,
  &:active {
    background: #e4e4e4;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.16);
  }
`;

function Contact(props: Props) {
  const { cursorMouseOver } = props;
  const [bgDeco, setBgDeco] = useState(true);
  const [circleTop, setCircleTop] = useState(false);
  const [circleBottom, setCircleBottom] = useState(false);

  const handleMouseDown = () => {
    window.open("mailto:banjag954@naver.com");
  };

  useEffect(() => {
    setTimeout(() => {
      setBgDeco(!bgDeco);

      setTimeout(() => {
        setCircleTop(!circleTop);
      }, 640);
      setTimeout(() => {
        setCircleBottom(!circleBottom);
      }, 400);
    }, 5200);
  }, []);

  return (
    <>
      <PageOpening
        title={"Say Hello"}
        emoji={"🙂"}
        desc={"I hope to have a chance to work with you"}
      />
      <ContactWrap actived={bgDeco}>
        <div className="Intro" id="Appear01">
          <div className="Intro__Name">Junsu Kim</div>
          <div className="Intro__Job">
            Designer <br /> Developer <br /> Architect
          </div>

          <div className="Intro__Channel">
            <ChannelIcon
              href="https://www.behance.net/kimjunsoo"
              onMouseOver={cursorMouseOver}
            >
              <img src="behance.svg" alt="" />
            </ChannelIcon>
            <ChannelIcon
              href="https://github.com/banjag954"
              onMouseOver={cursorMouseOver}
            >
              <img src="github.svg" alt="" />
            </ChannelIcon>
          </div>

          <div className="Intro__Others" onMouseOver={cursorMouseOver}>
            +82)10-2090-3029
          </div>
          <div
            className="Intro__Others"
            onMouseOver={cursorMouseOver}
            onMouseDown={handleMouseDown}
          >
            banjag954@naver.com
          </div>
        </div>

        <TopCircle actived={circleTop}>
          <img className="TopCircle__Icon" src="introTop-circle.svg" alt="" />
        </TopCircle>

        <BottomCircle actived={circleBottom}>
          <img
            className="BottomCircle__Icon"
            src="introBottom-circle.svg"
            alt=""
          />
        </BottomCircle>
        {isMobile ? null : <MyImg opacity={bgDeco} />}
      </ContactWrap>

      <BackgroundDeco actived={bgDeco}>
        Say,
        <br />
        Hello
      </BackgroundDeco>
      <Background />
    </>
  );
}

export default Contact;
