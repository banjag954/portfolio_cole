import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { isMobile } from "react-device-detect";

const HeaderWrap = styled.div`
  position: fixed;
  top: 8px;
  left: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100vw - 16px);
  height: 72px;
  padding: 24px 16px;
  box-sizing: border-box;
  background: #fff;
  border-bottom: 1px solid #e4e4e4;
  z-index: 5000;

  .Header__Right {
    * + * {
      margin-left: 16px;
    }
  }
`;

const HeaderName = styled.div`
  font-family: "Fredoka One", cursive;
  font-size: 32px;
  font-weight: 700;
  line-height: 32px;
  color: #4b4b4b;
  user-select: none;
  #collapse {
    i {
      opacity: 0;
      font-style: normal;
      transition: all 0.8s cubic-bezier(0, 0, 0, 1);
    }
  }
  &:hover {
    color: #82ccdd !important;
  }

  @media screen and (max-width: 1024px) {
    font-size: 24px;
  }
`;

const HeaderMenu = styled(NavLink)`
  text-decoration: none;
  user-select: none;
  cursor: none;
  transition: all 0.24s ease;

  font-family: "Lobster", cursive;
  font-size: 12px;
  color: #4b4b4b;
  line-height: 32px;
  font-weight: 700;
  transition: all 0.24s ease;

  &:hover,
  &:active {
    color: #3b3b3b;
    font-size: 14px;
  }

  &.active {
    position: relative;
    color: #60a3bc;
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

type Props = {
  cursorMouseOver?: () => void;
};

export default function Header({ cursorMouseOver }: Props) {
  // 콜립스 안에 있는 6글자를 순서대로 오파시티 넣어 보이게 하고싶음.
  const handleMouseOut = () => {
    let logoNames: any = document.getElementsByTagName("i");

    for (let i = 0; i < 7; i++) {
      setTimeout(() => {
        logoNames[i].style.opacity = 0;
      }, 40 * i);
    }
  };

  const handleMouseOver = () => {
    let logoNames: any = document.getElementsByTagName("i");

    for (let i = 0; i < 7; i++) {
      setTimeout(() => {
        logoNames[i].style.opacity = 1;
      }, 40 * i);
    }
  };

  return (
    <HeaderWrap>
      <NavLink to="/*" style={{ textDecoration: "none", cursor: "none" }}>
        {isMobile ? (
          <HeaderName className="HeaderName__Logo"> J</HeaderName>
        ) : (
          <HeaderName
            className="HeaderName__Logo"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onMouseMove={cursorMouseOver}
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
          </HeaderName>
        )}
      </NavLink>

      <div className="Header__Right">
        <HeaderMenu to="/about" onMouseOver={cursorMouseOver}>
          About
        </HeaderMenu>
        <HeaderMenu to="/contact" onMouseOver={cursorMouseOver}>
          Contacts
        </HeaderMenu>
      </div>
    </HeaderWrap>
  );
}
