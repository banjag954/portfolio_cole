import React from "react";
import styled from "styled-components";
import Div100vh from "react-div-100vh";

import IntroCole from "./IntroCole";
import IntroAbout from "./IntroAbout";
import PageOpening from "../PageOpening";

const AboutWrap = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    border: 8px solid #82ccdd;
    box-sizing: border-box;
    transform-style: preserve-3d;
    perspective: 100px;
    overflow-x: hidden;
`;

// const AboutBackground = styled.section`
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100vw;
//     height: 100vh;
//     user-select: none;
//     z-index: -1;
// `;

const IntroText = styled.div`
    position: absolute;
    top: 88%;
    right: -24%;
    transform: perspective(2000px) translate3d(51%, 80%, -200px) rotateZ(90deg);
    opacity: 0;
    z-index: -1;

    transition: all 2s ease;
    span {
        display: block;
        font-size: 48vw;
        line-height: 56vw;
        font-family: "Fredoka One", cursive;
        color: #2c3a47;
        user-selet: none;
    }

    @media screen and (max-width: 1024px) {
        right: 36% !important;
        span {
            font-size: 56vw !important;
            line-height: 56vw !important;
            color: #f2f2f2;
        }
    }
`;

///////////////////////////////////////////////////////////////////////////////////////////////

export default class About extends React.Component {
    state = {
        opacity: 0,
        AppeaerContent: "none",
        toggle: true
    };

    handleOnClick = () => {
        let Text = document.getElementById("Text");

        this.setState({
            // toggle: !this.state.toggle
            toggle: false
        });
        console.log(AboutWrap, "toggle");
        setTimeout(() => {
            Text.style.transform =
                "perspective(2000px) translate3d(51%,36%,-200px) rotateZ(90deg)";
            Text.style.opacity = 1;
        }, 100);

        setTimeout(() => {
            this.setState({
                opacity: 1
            });
        }, 1200);
    };

    componentDidMount() {
        console.log("componentDidMount");
        setTimeout(() => {
            this.setState({
                AppeaerContent: "block"
            });
        }, 100);
    }

    render() {
        const { AppeaerContent, toggle, opacity } = this.state;

        return (
            <>
                <PageOpening
                    textTitle={"Let me Introduce..."}
                    titleDeco={"🥵"}
                    textDesc={"Am I happen to shivering now...? :("}
                />
                <Div100vh>
                    <AboutWrap
                        id="AboutWrap"
                        onClick={this.handleOnClick.bind(this)}
                        style={{
                            overflowY: toggle ? "hidden" : "auto"
                        }}
                    >
                        <IntroAbout toggle={toggle} />
                        <IntroCole opacity={opacity} />
                        <IntroText id="Text">
                            <span>Service,UI&UX</span>
                            <span>Designer.</span>
                        </IntroText>
                    </AboutWrap>
                </Div100vh>
                {/* <AboutBackground
                    style={{
                        display: AppeaerContent
                    }}
                ></AboutBackground> */}
            </>
        );
    }
}
