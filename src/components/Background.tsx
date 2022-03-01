import React from "react";
import styled from "styled-components";

const BackgroundWrap = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: -1;

  .vertical {
    display: inline-block;
    width: 12.5%;
    height: 100%;
    border-right: 1px solid #fafafa;
  }
  .horizon {
    position: absolute;
    display: inline-block;
    width: 100%;
    height: 50%;
    border-bottom: 1px solid #fafafa;
    float: right;
  }
`;

type Props = {};

export default function Background(props: Props) {
  return (
    <BackgroundWrap>
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
