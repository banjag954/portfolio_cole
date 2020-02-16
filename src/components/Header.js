import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { isMobile } from "react-device-detect";

const HeaderWrap = styled.div`
    position: fixed;
    top: 8px;
    left: 8px;
    width: calc(100vw - 16px);
    height: 72px;
    background: #fff;
    border-bottom: 1px solid #e4e4e4;
    z-index: 5000;
`;

const HeaderName = styled.div`
    margin: 24px 0px 24px 32px;
    float: left;

    span {
        font-family: "Fredoka One", cursive;
        font-size: 32px;
        font-weight: 700;
        line-height: 32px;
        color: #4b4b4b;
        user-select: none;
        i {
            font-style: normal;
        }
    }
    #collapse {
        display: inline-block;
        max-width: 0px;
        transition: max-width 0.3s cubic-bezier(0, 0, 0, 1);
        i {
            opacity: 0;
            transition: all 0.8s cubic-bezier(0, 0, 0, 1);
        }
    }

    @media screen and (min-width: 1025px) {
        &:hover {
            span {
                color: #82ccdd !important;
            }
            #collapse {
                max-width: 144px;
            }
        }
    }
    @media screen and (max-width: 1024px) {
        span {
            font-size: 24px;
        }
    }
`;

const HeaderListWrap = styled.div`
    margin: 24px 16px;
    float: right;
    text-align: center;
`;

const HeaderMenu = styled(NavLink)`
    padding: 12px 16px;

    text-decoration: none;
    user-select: none;
    cursor: none;
    transition: all 0.24s ease;

    span {
        font-family: "Lobster", cursive;
        font-size: 12px;
        color: #4b4b4b;
        line-height: 32px;
        font-weight: 700;
        transition: all 0.24s ease;
    }

    &:hover {
        span {
            color: #666;
            font-size: 14px;
        }
    }
    &:active {
        span {
            color: #333;
            font-size: 14px;
        }
    }

    &.active {
        position: relative;
        span {
            color: #60a3bc;
        }
        &:after {
            content: "";
            position: absolute;
            left: 50%;
            top: 56%;
            display: inline-block;
            width: 80%;
            height: 8px;
            background: #dff9fb;
            transform: translate(-50%, -50%);
            z-index: -1;
        }
    }
`;

export default class Header extends React.Component {
    // 콜립스 안에 있는 6글자를 순서대로 오파시티 넣어 보이게 하고싶음.
    handleMouseOver = () => {
        let logoNames = document
            .getElementById("collapse")
            .getElementsByTagName("i");

        for (let i = 0; i < 7; i++) {
            setTimeout(() => {
                logoNames[i].style.opacity = 1;
            }, 40 * i);
        }
        this.props.handleMouseOver();
    };

    handleMouseOut = () => {
        let logoNames = document
            .getElementById("collapse")
            .getElementsByTagName("i");

        for (let i = 0; i < 7; i++) {
            setTimeout(() => {
                logoNames[i].style.opacity = 0;
            }, 40 * i);
        }
    };

    render = () => {
        return (
            <HeaderWrap>
                <NavLink
                    exact
                    to="/"
                    style={{ textDecoration: "none", cursor: "none" }}
                >
                    {isMobile ? (
                        <HeaderName>
                            <span>J.</span>
                        </HeaderName>
                    ) : (
                        <HeaderName>
                            <span
                                onMouseOver={this.handleMouseOver.bind(this)}
                                onMouseOut={this.handleMouseOut.bind(this)}
                            >
                                J
                                <span id="collapse">
                                    <i className="logoNames">u</i>
                                    <i className="logoNames">n</i>
                                    <i className="logoNames">s</i>
                                    <i className="logoNames">u</i>
                                    <i className="logoNames">K</i>
                                    <i className="logoNames">i</i>
                                    <i className="logoNames">m</i>
                                </span>
                                .
                            </span>
                        </HeaderName>
                    )}
                </NavLink>

                <HeaderListWrap>
                    <HeaderMenu
                        to="/about"
                        style={{ textDecoration: "none", cursor: "none" }}
                        activeClassName="active"
                        onMouseOver={this.props.handleMouseOver}
                    >
                        <span>About</span>
                    </HeaderMenu>

                    <HeaderMenu
                        to="/contact"
                        style={{ textDecoration: "none", cursor: "none" }}
                        activeClassName="active"
                        onMouseOver={this.props.handleMouseOver}
                    >
                        <span>Contacts</span>
                    </HeaderMenu>
                </HeaderListWrap>
            </HeaderWrap>
        );
    };
}
