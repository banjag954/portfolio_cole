import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Background from "../../components/Background";

const AboutWrap = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 500;
  transition: all 0.32s ease;

  &.Open {
    opacity: 1;
    visibility: visible;
  }
  &.Close {
    opacity: 0;
    visibility: hidden;
  }
`;

const AboutATypo = styled.div`
  position: absolute;
  top: 54%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 850px;
  opacity: 1;
  z-index: 1;

  animation: TypoAni 2s ease-in;
  animation-fill-mode: forwards;

  @keyframes TypoAni {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 88vw;
  }
`;

const TypoWrap = styled.div`
    position: relative;
    width: 144px;
    height: 144px;

    display: inline-block;
    margin-right: 32px;
    user-select: none;
    &:nth-child(5) {
        margin-right: 0px;
    }

    @media screen and (max-width: 1024px) {
        width: 15vw;
        height: 15vw;
        margin-right: 3.64%;
    }

    .A1 {
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .A2 {
        position: absolute;
        top: 32%;
        left: 31%;
        width: 38%;
        height: 32%;
        animation: bounce 3.2s ease infinite;

        @keyframes bounce {
            from,
            20%,
            53%,
            80%,
            to {
                animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
                transform: translate3d(0, 0, 0);
            }

            40%,
            43% {
                animation-timing-function: cubic-bezier(
                    0.755,
                    0.05,
                    0.855,
                    0.06
                );
                transform: translate3d(0, -24px, 0);
            }

            70% {
                animation-timing-function: cubic-bezier(
                    0.755,
                    0.05,
                    0.855,
                    0.06
                );
                transform: translate3d(0, -8px, 0);
            }

            90% {
                transform: translate3d(0, -4px, 0);
            }
        }
    }
    .A3 {
        position: absolute;
        bottom: -10%;
        left: 38%;
        width: 24%;
        height: 24%;
        animation: rubberBand 3.2s ease-in-out infinite;

        @keyframes rubberBand {
            from {
              transform: scale3d(1, 1, 1);
            }
          
            30% {
              transform: scale3d(1.25, 0.75, 1);
            }
          
            40% {
              transform: scale3d(0.75, 1.25, 1);
            }
          
            50% {
              transform: scale3d(1.15, 0.85, 1);
            }
          
            65% {
              transform: scale3d(0.95, 1.05, 1);
            }
          
            75% {
              transform: scale3d(1.05, 0.95, 1);
            }
          
            to {
              transform: scale3d(1, 1, 1);
            }
          }

    }

    }
    .B1 {
        position: absolute;
        width: 50%;
        height: 100%;
    }
    .B2 {
        position: absolute;
        top: 0;
        right: 0;
        width: 67%;
        height: 67%;
        opacity: 0.8;
        z-index: 1;
        animation: flash 6.4s ease-in-out infinite;

        @keyframes flash {
            from,
            50%,
            to {
              opacity: 0.8;
            }
          
            25%,
            75% {
              opacity: 0;
            }
          }
          
    }
    .B3 {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 67%;
        height: 67%;
    }

    .O {
        width: 96%;
        height: 96%;
        animation: heartBeat 3.2s ease infinite;
        @keyframes heartBeat {
            0% {
              transform: scale(1);
            }
          
            14% {
              transform: scale(1.1);
            }
          
            28% {
              transform: scale(1);
            }
          
            42% {
              transform: scale(1.1);
            }
          
            70% {
              transform: scale(1);
            }
          }
          
    }

    .U1 {
        position: absolute;
        right: 0;
        width: 50%;
        height: 100%;
        animation: fadeInRight 3.2s ease infinite;

        @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translate3d(24px, 0, 0);
            }
          
            80% {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
            100% {
                opacity: 1;
                transform: translate3d(0, 0, 0);
            }
  
          }
    }
    .U2 {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 50%;

        animation: fadeInDown 3.2s ease infinite;

        @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translate3d(0, -100%, 0);
            }
          
            to {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }
    }
    .U3 {
        position: absolute;
        width: 50%;
        height: 40%;

    }

    .T1 {
        position: absolute;
        left: 27%;
        width: 50%;
        height: 100%;
    }
    .T2 {
        position: absolute;
        right: 0;
        width: 54%;
        height: 54%;
        opacity: 0.8;
        animation: jello 3.2s ease infinite;


        @keyframes jello {
            from,
            11.1%,
            to {
              transform: translate3d(0, 0, 0);
            }
          
            22.2% {
              transform: skewX(-12.5deg) skewY(-12.5deg);
            }
          
            33.3% {
              transform: skewX(6.25deg) skewY(6.25deg);
            }
          
            44.4% {
              transform: skewX(-3.125deg) skewY(-3.125deg);
            }
          
            55.5% {
              transform: skewX(1.5625deg) skewY(1.5625deg);
            }
          
            66.6% {
              transform: skewX(-0.78125deg) skewY(-0.78125deg);
            }
          
            77.7% {
              transform: skewX(0.390625deg) skewY(0.390625deg);
            }
          
            88.8% {
              transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
            }
          }
    }
    .T3 {
        position: absolute;
        width: 54%;
        height: 54%;
        opacity: 0.8;
    }
`;

const AboutInfoWrap = styled.div`
  position: relative;
  text-align: center;
  user-select: none;

  .Info__Name {
    font-family: "Lobster", cursive;
    font-size: 40px;
    color: #4b4b4b;
    margin-top: 64px;
    display: block;
  }
  .Info__Button {
    margin: 32px auto 0;
    display: block;
    padding: 12px;
    width: 200px;
    font-family: "Gothic A1", sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #8b8b8b;
    background: rgba(0, 0, 0, 0.04);
    border-radius: 32px;
  }
`;

type Props = {
  pageControl?: boolean;
};

export default function IntroAbout(props: Props) {
  const [pageControl, setPageControl] = useState(true);
  const [appeaerTypo, setAppeaerTypo] = useState("none");

  useEffect(() => {
    setTimeout(() => {
      setAppeaerTypo("block");
    }, 4000);
  }, []);

  return (
    <AboutWrap
      onClick={() => {
        setPageControl(!true);
      }}
      className={pageControl ? "Open" : "Close"}
    >
      <AboutATypo
        style={{
          display: appeaerTypo,
        }}
      >
        <TypoWrap>
          <img className="A1" src="A1.svg" alt="" />
          <img className="A2" src="A2.svg" alt="" />
          <img className="A3" src="A3.svg" alt="" />
        </TypoWrap>
        <TypoWrap>
          <img className="B1" src="B1.svg" alt="" />
          <img className="B2" src="B2.svg" alt="" />
          <img className="B3" src="B3.svg" alt="" />
        </TypoWrap>
        <TypoWrap>
          <img className="O" src="O.svg" alt="" />
        </TypoWrap>
        <TypoWrap>
          <img className="U1" src="U1.svg" alt="" />
          <img className="U2" src="U2.svg" alt="" />
          <img className="U3" src="U3.svg" alt="" />
        </TypoWrap>
        <TypoWrap>
          <img className="T1" src="T1.svg" alt="" />
          <img className="T2" src="T2.svg" alt="" />
          <img className="T3" src="T3.svg" alt="" />
        </TypoWrap>
        <AboutInfoWrap>
          <span className="Info__Name">Junsu Kim</span>
          <div className="Info__Button">
            Click the Screen{" "}
            <span role="img" aria-label="fingure">
              👆
            </span>
          </div>
        </AboutInfoWrap>
      </AboutATypo>
      <Background />
    </AboutWrap>
  );
}
