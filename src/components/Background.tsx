import React from "react";
import styled from "styled-components";

const BackgroundWrap = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  background: transparent;
  border: 8px solid rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  z-index: -2;

  .vertical {
    display: inline-block;
    width: 12.5%;
    height: 100%;
    border-right: 1px solid rgba(0, 0, 0, 0.04);
  }
  .horizon {
    position: absolute;
    display: inline-block;
    width: 100%;
    height: 33.3%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.04);
    float: right;
    &:nth-child(2) {
      top: 33.3%;
    }
  }
`;

type Props = {};

export default function Background(props: Props) {
  return (
    <BackgroundWrap>
      <div className="horizon"></div>
      <div className="horizon"></div>
      <div className="vertical"></div>
      <div className="vertical"></div>
      <div className="vertical"></div>
      <div className="vertical"></div>
      <div className="vertical"></div>
      <div className="vertical"></div>
      <div className="vertical"></div>
      <div className="vertical"></div>
    </BackgroundWrap>
  );
}
