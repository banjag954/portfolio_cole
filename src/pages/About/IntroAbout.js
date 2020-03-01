import React from "react";
import styled from "styled-components";

const AboutWrap = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
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

const AboutBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;

    .vertical {
        display: inline-block;
        width: 12.5%;
        height: 100%;
        border-right: 1px solid #eee;
    }
    .horizon {
        position: absolute;
        display: inline-block;
        width: 100%;
        height: 50%;
        border-bottom: 1px solid #eee;
        float: right;
    }
`;

const AboutATypo = styled.div`
    position: absolute;
    top: 54%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 850px;
    z-index: 1;
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
    width: 100%;
    text-align: center;
    user-select: none;

    .myName {
        font-family: "Lobster", cursive;
        font-size: 40px;
        color: #4b4b4b;
        margin-top: 64px;
        display: block;
    }
    .click {
        display: block;
        width: 240px;
        padding: 8px;
        margin: 32px auto;

        font-family: "Gothic A1", sans-serif;
        font-size: 20px;
        color: #999;
        border: 1px solid #999;
    }
`;

export default class IntroAbout extends React.Component {
    render() {
        return (
            <AboutWrap className={this.props.toggle ? "Open" : "Close"}>
                <AboutATypo>
                    <TypoWrap>
                        <svg
                            className="A1"
                            width="144"
                            height="144"
                            viewBox="0 0 144 144"
                        >
                            <polygon
                                fill="#414f67"
                                points="72 0 144 144 0 144"
                            />
                        </svg>
                        <svg
                            className="A2"
                            width="56"
                            height="56"
                            viewBox="0 0 56 56"
                        >
                            <polygon
                                fill="#82CCDD"
                                points="72 44 100 100 44 100"
                                transform="translate(-44 -44)"
                            />
                        </svg>
                        <svg
                            className="A3"
                            width="53"
                            height="35"
                            viewBox="0 0 53 35"
                        >
                            <rect
                                width="53"
                                height="35"
                                x="47"
                                y="117"
                                fill="#F5BD7B"
                                transform="translate(-47 -117)"
                            />
                        </svg>
                    </TypoWrap>
                    <TypoWrap>
                        <svg
                            className="B1"
                            width="72"
                            height="144"
                            viewBox="0 0 72 144"
                        >
                            <rect width="72" height="144" fill="#414f67" />
                        </svg>
                        <svg
                            className="B2"
                            width="100"
                            height="100"
                            viewBox="0 0 100 100"
                        >
                            <circle
                                cx="94"
                                cy="50"
                                r="50"
                                fill="#82CCDD"
                                transform="translate(-44)"
                            />
                        </svg>
                        <svg
                            className="B3"
                            width="100"
                            height="100"
                            viewBox="0 0 100 100"
                        >
                            <circle
                                cx="94"
                                cy="94"
                                r="50"
                                fill="#F5BD7B"
                                transform="translate(-44 -44)"
                            />
                        </svg>
                    </TypoWrap>
                    <TypoWrap>
                        <svg
                            className="O"
                            width="144"
                            height="144"
                            viewBox="0 0 144 144"
                        >
                            <g fill="none" fillRule="evenodd">
                                <path
                                    fill="#414f67"
                                    d="M72,0 C111.764502,0 144,32.235498 144,72 C144,111.764502 111.764502,144 72,144 C32.235498,144 0,111.764502 0,72 C0,32.235498 32.235498,0 72,0 Z M72,32 C49.90861,32 32,49.90861 32,72 C32,94.09139 49.90861,112 72,112 C94.09139,112 112,94.09139 112,72 C112,49.90861 94.09139,32 72,32 Z"
                                />
                                <circle
                                    cx="72"
                                    cy="72"
                                    r="56"
                                    stroke="#82CCDD"
                                    strokeWidth="4"
                                />
                            </g>
                        </svg>
                    </TypoWrap>
                    <TypoWrap>
                        <svg
                            className="U1"
                            width="72"
                            height="144"
                            viewBox="0 0 72 144"
                        >
                            <path
                                fill="#414f67"
                                d="M72,0 L144,0 L144,72 C144,111.764502 111.764502,144 72,144 L72,144 L72,144 L72,0 Z"
                                transform="translate(-72)"
                            />
                        </svg>
                        <svg
                            className="U2"
                            width="144"
                            height="72"
                            viewBox="0 0 144 72"
                        >
                            <path
                                fill="#F5BD7B"
                                d="M0,72 L144,72 C144,111.764502 111.764502,144 72,144 C32.235498,144 4.86974701e-15,111.764502 0,72 L0,72 L0,72 Z"
                                transform="translate(0 -72)"
                            />
                        </svg>
                        <svg
                            className="U3"
                            width="72"
                            height="56"
                            viewBox="0 0 72 56"
                        >
                            <rect width="72" height="56" fill="#82CCDD" />
                        </svg>
                    </TypoWrap>
                    <TypoWrap>
                        <svg
                            className="T1"
                            width="72"
                            height="144"
                            viewBox="0 0 72 144"
                        >
                            <rect
                                width="72"
                                height="144"
                                x="36"
                                fill="#414f67"
                                transform="translate(-36)"
                            />
                        </svg>
                        <svg
                            className="T2"
                            width="80"
                            height="80"
                            viewBox="0 0 80 80"
                        >
                            <circle cx="40" cy="40" r="40" fill="#82CCDD" />
                        </svg>
                        <svg
                            className="T3"
                            width="80"
                            height="80"
                            viewBox="0 0 80 80"
                        >
                            <circle
                                cx="104"
                                cy="40"
                                r="40"
                                fill="#F5BD7B"
                                transform="translate(-64)"
                            />
                        </svg>
                    </TypoWrap>
                    <AboutInfoWrap>
                        <span className="myName">Junsu Kim</span>
                        <span className="click">
                            Click the Screen{" "}
                            <span role="img" aria-label="fingure">
                                👆
                            </span>
                        </span>
                    </AboutInfoWrap>
                </AboutATypo>
                <AboutBackground>
                    <div className="horizon"></div>
                    <div className="vertical"></div>
                    <div className="vertical"></div>
                    <div className="vertical"></div>
                    <div className="vertical"></div>
                    <div className="vertical"></div>
                    <div className="vertical"></div>
                    <div className="vertical"></div>
                    <div className="vertical"></div>
                </AboutBackground>
            </AboutWrap>
        );
    }
}
