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
    transition: all 0.72s ease;
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
        top: -40px;
        right: -458px;
        width: 136px;
        z-index: 1;
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
        top: 200px;
        right: -130px;
        width: 128px;
        z-index: 1;
        animation: circle03 4s ease infinite;
        @keyframes circle03 {
            from {
                right: -124px;
                transform: rotate(0deg);
            }
            50% {
                right: -130px;
                transform: rotate(8deg);
            }
            to {
                right: -124px;
                transform: rotate(0deg);
            }
        }
    }

    .circle04 {
        position: absolute;
        top: 230px;
        right: -490px;
        width: 96px;
        z-index: 1;
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
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 8}px,${y / 8}px,0)`;

const MyImg = props => {
    const [ani, set] = useSpring(() => ({
        xy: [0, 0],
        config: { mass: 10, tension: 550, friction: 140 }
    }));

    return (
        <>
            <IntroWrap
                onMouseMove={({ clientX: x, clientY: y }) =>
                    set({ xy: calc(x, y) })
                }
                style={{
                    display: props.AppeaerIntro,
                    opacity: props.opacityAlbum
                }}
            >
                <AboutProfile>
                    <animated.div
                        style={{
                            transform: ani.xy.interpolate(trans3),
                            zIndex: "10"
                        }}
                    >
                        <svg
                            className="circle01"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="100"
                            height="100"
                            viewBox="0 0 100 100"
                        >
                            <defs>
                                <path
                                    id="circle_01@3x-a"
                                    d="M48,0 C74.509668,0 96,21.490332 96,48 C96,74.509668 74.509668,96 48,96 C21.490332,96 0,74.509668 0,48 C0,21.490332 21.490332,0 48,0 Z M48,24 C34.745166,24 24,34.745166 24,48 C24,61.254834 34.745166,72 48,72 C61.254834,72 72,61.254834 72,48 C72,34.745166 61.254834,24 48,24 Z"
                                />
                            </defs>
                            <g
                                fill="none"
                                fillRule="evenodd"
                                transform="translate(2 2)"
                            >
                                <mask id="circle_01@3x-b" fill="#fff">
                                    <use xlinkHref="#circle_01@3x-a" />
                                </mask>
                                <path
                                    stroke="#F5BD7B"
                                    strokeWidth="2"
                                    d="M48,-1 C61.5309764,-1 73.7809764,4.48451181 82.6482323,13.3517677 C91.5154882,22.2190236 97,34.4690236 97,48 C97,61.5309764 91.5154882,73.7809764 82.6482323,82.6482323 C73.7809764,91.5154882 61.5309764,97 48,97 C34.4690236,97 22.2190236,91.5154882 13.3517677,82.6482323 C4.48451181,73.7809764 -1,61.5309764 -1,48 C-1,34.4690236 4.48451181,22.2190236 13.3517677,13.3517677 C22.2190236,4.48451181 34.4690236,-1 48,-1 L48,-1 Z M48,25 C41.6487254,25 35.8987254,27.5743627 31.736544,31.736544 C27.5743627,35.8987254 25,41.6487254 25,48 C25,54.3512746 27.5743627,60.1012746 31.736544,64.263456 C35.8987254,68.4256373 41.6487254,71 48,71 C54.3512746,71 60.1012746,68.4256373 64.263456,64.263456 C68.4256373,60.1012746 71,54.3512746 71,48 C71,41.6487254 68.4256373,35.8987254 64.263456,31.736544 C60.1012746,27.5743627 54.3512746,25 48,25 Z"
                                />
                                <g fill="#60A3BC" mask="url(#circle_01@3x-b)">
                                    <g transform="translate(3 -5)">
                                        <circle cx="10" cy="33" r="3" />
                                        <circle cx="24" cy="33" r="3" />
                                        <circle cx="38" cy="33" r="3" />
                                        <circle cx="52" cy="33" r="3" />
                                        <circle cx="66" cy="33" r="3" />
                                        <circle cx="80" cy="33" r="3" />
                                        <circle cx="17" cy="23" r="3" />
                                        <circle cx="31" cy="23" r="3" />
                                        <circle cx="45" cy="23" r="3" />
                                        <circle cx="59" cy="23" r="3" />
                                        <circle cx="73" cy="23" r="3" />
                                        <circle cx="87" cy="23" r="3" />
                                        <circle cx="3" cy="23" r="3" />
                                        <circle cx="10" cy="13" r="3" />
                                        <circle cx="24" cy="13" r="3" />
                                        <circle cx="38" cy="13" r="3" />
                                        <circle cx="52" cy="13" r="3" />
                                        <circle cx="66" cy="13" r="3" />
                                        <circle cx="80" cy="13" r="3" />
                                        <circle cx="17" cy="3" r="3" />
                                        <circle cx="31" cy="3" r="3" />
                                        <circle cx="45" cy="3" r="3" />
                                        <circle cx="59" cy="3" r="3" />
                                        <circle cx="73" cy="3" r="3" />
                                        <circle cx="87" cy="3" r="3" />
                                        <circle cx="3" cy="3" r="3" />
                                        <circle cx="10" cy="73" r="3" />
                                        <circle cx="24" cy="73" r="3" />
                                        <circle cx="38" cy="73" r="3" />
                                        <circle cx="52" cy="73" r="3" />
                                        <circle cx="66" cy="73" r="3" />
                                        <circle cx="80" cy="73" r="3" />
                                        <circle cx="17" cy="63" r="3" />
                                        <circle cx="31" cy="63" r="3" />
                                        <circle cx="45" cy="63" r="3" />
                                        <circle cx="59" cy="63" r="3" />
                                        <circle cx="73" cy="63" r="3" />
                                        <circle cx="87" cy="63" r="3" />
                                        <circle cx="3" cy="63" r="3" />
                                        <circle cx="10" cy="53" r="3" />
                                        <circle cx="24" cy="53" r="3" />
                                        <circle cx="38" cy="53" r="3" />
                                        <circle cx="52" cy="53" r="3" />
                                        <circle cx="66" cy="53" r="3" />
                                        <circle cx="80" cy="53" r="3" />
                                        <circle cx="17" cy="43" r="3" />
                                        <circle cx="31" cy="43" r="3" />
                                        <circle cx="45" cy="43" r="3" />
                                        <circle cx="59" cy="43" r="3" />
                                        <circle cx="73" cy="43" r="3" />
                                        <circle cx="87" cy="43" r="3" />
                                        <circle cx="3" cy="43" r="3" />
                                        <circle cx="17" cy="103" r="3" />
                                        <circle cx="31" cy="103" r="3" />
                                        <circle cx="45" cy="103" r="3" />
                                        <circle cx="59" cy="103" r="3" />
                                        <circle cx="73" cy="103" r="3" />
                                        <circle cx="87" cy="103" r="3" />
                                        <circle cx="3" cy="103" r="3" />
                                        <circle cx="10" cy="93" r="3" />
                                        <circle cx="24" cy="93" r="3" />
                                        <circle cx="38" cy="93" r="3" />
                                        <circle cx="52" cy="93" r="3" />
                                        <circle cx="66" cy="93" r="3" />
                                        <circle cx="80" cy="93" r="3" />
                                        <circle cx="17" cy="83" r="3" />
                                        <circle cx="31" cy="83" r="3" />
                                        <circle cx="45" cy="83" r="3" />
                                        <circle cx="59" cy="83" r="3" />
                                        <circle cx="73" cy="83" r="3" />
                                        <circle cx="87" cy="83" r="3" />
                                        <circle cx="3" cy="83" r="3" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </animated.div>
                    <animated.div
                        style={{
                            transform: ani.xy.interpolate(trans2),
                            zIndex: "10"
                        }}
                    >
                        <svg
                            className="circle02"
                            width="171"
                            height="157"
                            viewBox="0 0 171 157"
                        >
                            <g fill="none" fillRule="evenodd">
                                <polyline
                                    fill="#82CCDD"
                                    points="51 0 102 88 0 88 51 0"
                                />
                                <g
                                    stroke="#121E25"
                                    strokeWidth="2"
                                    transform="translate(42 28)"
                                >
                                    <circle cx="64" cy="64" r="28" />
                                    <circle cx="64" cy="64" r="40" />
                                    <circle cx="64" cy="64" r="52" />
                                    <circle cx="64" cy="64" r="64" />
                                </g>
                            </g>
                        </svg>
                    </animated.div>
                    <animated.div
                        style={{
                            transform: ani.xy.interpolate(trans4),
                            zIndex: "10"
                        }}
                    >
                        <svg
                            className="circle03"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="128"
                            height="128"
                            viewBox="0 0 128 128"
                        >
                            <defs>
                                <circle
                                    id="circle_03@3x-a"
                                    cx="48"
                                    cy="48"
                                    r="48"
                                />
                            </defs>
                            <g fill="none" fillRule="evenodd">
                                <rect
                                    width="96"
                                    height="96"
                                    x="32"
                                    y="32"
                                    fill="#F5BD7B"
                                />
                                <mask id="circle_03@3x-b" fill="#fff">
                                    <use xlinkHref="#circle_03@3x-a" />
                                </mask>
                                <rect
                                    width="140"
                                    height="8"
                                    x="-22"
                                    y="-4"
                                    fill="#121E25"
                                    mask="url(#circle_03@3x-b)"
                                />
                                <rect
                                    width="140"
                                    height="8"
                                    x="-22"
                                    y="12"
                                    fill="#121E25"
                                    mask="url(#circle_03@3x-b)"
                                />
                                <rect
                                    width="140"
                                    height="8"
                                    x="-22"
                                    y="28"
                                    fill="#121E25"
                                    mask="url(#circle_03@3x-b)"
                                />
                                <rect
                                    width="140"
                                    height="8"
                                    x="-22"
                                    y="44"
                                    fill="#121E25"
                                    mask="url(#circle_03@3x-b)"
                                />
                                <rect
                                    width="140"
                                    height="8"
                                    x="-22"
                                    y="60"
                                    fill="#121E25"
                                    mask="url(#circle_03@3x-b)"
                                />
                                <rect
                                    width="140"
                                    height="8"
                                    x="-22"
                                    y="76"
                                    fill="#121E25"
                                    mask="url(#circle_03@3x-b)"
                                />
                                <rect
                                    width="140"
                                    height="8"
                                    x="-22"
                                    y="92"
                                    fill="#121E25"
                                    mask="url(#circle_03@3x-b)"
                                />
                            </g>
                        </svg>
                    </animated.div>
                    <animated.div
                        style={{
                            transform: ani.xy.interpolate(trans1),
                            zIndex: "10"
                        }}
                    >
                        <svg
                            className="circle04"
                            width="96"
                            height="96"
                            viewBox="0 0 96 96"
                        >
                            <g fill="none" fillRule="evenodd">
                                <path
                                    fill="#736AA1"
                                    d="M48,0 C74.509668,0 96,21.490332 96,48 C96,74.509668 74.509668,96 48,96 C21.490332,96 0,74.509668 0,48 C0,21.490332 21.490332,0 48,0 Z M48,24 C34.745166,24 24,34.745166 24,48 C24,61.254834 34.745166,72 48,72 C61.254834,72 72,61.254834 72,48 C72,34.745166 61.254834,24 48,24 Z"
                                />
                                <circle cx="48" cy="49" r="36" stroke="#FFF" />
                            </g>
                        </svg>
                    </animated.div>
                    <animated.img
                        className="coleImg"
                        src="https://banjag954.github.io/portfolio_cole/col@3x.jpg"
                        alt="coleImg"
                        style={{
                            transform: ani.xy.interpolate(trans1)
                        }}
                    />
                </AboutProfile>
            </IntroWrap>
        </>
    );
};

export default MyImg;
