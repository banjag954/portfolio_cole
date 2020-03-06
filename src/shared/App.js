import React from "react";
import { Route, Switch } from "react-router-dom";
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

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xMain: 0,
            yMain: 0,
            border: "2px solid #778ca3",
            borderScale: "translate(-50%, -50%) scale(1)",

            xTrailing: 0,
            yTrailing: 0,
            tailColor: "#82ccdd",
            pointerExpand: false
        };
    }

    handleMouseMove = e => {
        // const x = e.clientX;
        // const y = e.clientY;
        // 같은 표시

        const { clientX, clientY } = e;
        this.setState(
            {
                xMain: clientX,
                yMain: clientY
            },
            () => {
                setTimeout(() => {
                    this.setState({
                        xTrailing: clientX,
                        yTrailing: clientY
                    });
                }, 40);
            }
        );
    };

    handleMouseDown = () => {
        this.setState({
            tailColor: "#a55eea",
            borderScale: "translate(-50%, -50%) scale(1.6)",
            border: "1px solid #a29bfe"
        });
    };

    handleMouseUp = () => {
        this.setState({
            tailColor: "#82ccdd",
            borderScale: "translate(-50%, -50%) scale(1)",
            border: "2px solid #778ca3"
        });
    };

    // 로고에 마우스가 얹히면, 로고의 크기가 1.6배 증가한다.
    handleMouseOver = () => {
        this.setState({
            tailColor: "#eb4d4b",
            borderScale: "translate(-50%, -50%) scale(1.6)",
            border: "1px solid #2c3e50"
        });
    };

    handleMouseOut = () => {
        this.setState({
            tailColor: "#82ccdd",
            borderScale: "translate(-50%, -50%) scale(1)",
            border: "2px solid #778ca3"
        });
    };

    renderContent = () => {
        if (isMobile) {
            return <div> This content is unavailable on mobile</div>;
        }
        return <div> ...content </div>;
    };

    render = () => {
        // we retrieve coordinates from state
        const {
            xMain,
            yMain,
            xTrailing,
            yTrailing,
            tailColor,
            border,
            borderColor,
            borderScale
        } = this.state;

        if (isMobile) {
            return (
                <>
                    <Header handleMouseOver={this.handleMouseOver} />
                    <Route
                        render={({ location }) => (
                            <TransitionGroup>
                                <CSSTransition key={location.key} timeout={200}>
                                    <Switch location={location}>
                                        <Route
                                            exact
                                            path={process.env.PUBLIC_URL + "/"}
                                            render={props => (
                                                <Home
                                                    {...props}
                                                    handleMouseOver={
                                                        this.handleMouseOver
                                                    }
                                                />
                                            )}
                                        />
                                        <Route
                                            path={
                                                process.env.PUBLIC_URL +
                                                "/about"
                                            }
                                            render={props => (
                                                <About {...props} />
                                            )}
                                        />
                                        <Route
                                            path={
                                                process.env.PUBLIC_URL +
                                                "/contact"
                                            }
                                            render={props => (
                                                <Contact
                                                    {...props}
                                                    handleMouseOver={
                                                        this.handleMouseOver
                                                    }
                                                />
                                            )}
                                        />
                                        <Route component={Home} />
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        )}
                    />
                </>
            );
        } else if (isBrowser) {
            return (
                <>
                    <CursorWrap
                        onMouseMove={e => this.handleMouseMove(e)}
                        onMouseDown={this.handleMouseDown}
                        onMouseUp={this.handleMouseUp}
                        onMouseOut={this.handleMouseOut}
                    >
                        <div
                            id="CursorMain"
                            className={
                                this.state.border === "1px solid #a29bfe"
                                    ? "CursorDeco"
                                    : null
                            }
                            style={{
                                left: xMain,
                                top: yMain,
                                borderColor: borderColor,
                                border: border,
                                transform: borderScale
                            }}
                        />
                        <div
                            id="CursorTail"
                            style={{
                                left: xTrailing,
                                top: yTrailing,
                                backgroundColor: tailColor
                            }}
                        />

                        <Header handleMouseOver={this.handleMouseOver} />

                        <Route
                            render={({ location }) => (
                                <TransitionGroup>
                                    <CSSTransition
                                        key={location.key}
                                        timeout={200}
                                    >
                                        <Switch location={location}>
                                            <Route
                                                exact
                                                path={
                                                    process.env.PUBLIC_URL + "/"
                                                }
                                                render={props => (
                                                    <Home
                                                        {...props}
                                                        handleMouseOver={
                                                            this.handleMouseOver
                                                        }
                                                    />
                                                )}
                                            />
                                            <Route
                                                path={
                                                    process.env.PUBLIC_URL +
                                                    "/about"
                                                }
                                                render={props => (
                                                    <About {...props} />
                                                )}
                                            />
                                            <Route
                                                path={
                                                    process.env.PUBLIC_URL +
                                                    "/contact"
                                                }
                                                render={props => (
                                                    <Contact
                                                        {...props}
                                                        handleMouseOver={
                                                            this.handleMouseOver
                                                        }
                                                    />
                                                )}
                                            />
                                            <Route component={Home} />
                                        </Switch>
                                    </CSSTransition>
                                </TransitionGroup>
                            )}
                        />
                    </CursorWrap>
                </>
            );
        }
    };
}
