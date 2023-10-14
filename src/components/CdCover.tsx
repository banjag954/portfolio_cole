import React from "react";
import styled from "styled-components";

type StyledProps = {
  play?: boolean;
};

const CoverWrap = styled.section`
  position: relative;
  margin: auto;
  width: 360px;
  height: 360px;

  .Cover__Deco-1 {
    position: absolute;
    top: 0;
    left: 0;
  }
  .Cover__Deco-2 {
    position: absolute;
    top: 0;
    right: 0;
  }

  @media screen and (max-width: 560px) {
    width: 320px;
    height: 320px;
  }
`;

const Case = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 48%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px 24px 40px;
  border-radius: 2px 2px 8px 8px;
  background: linear-gradient(0deg, #ffffff, #ffffffcc);
  backdrop-filter: blur(8px);
  box-shadow: 0px 2px 16px rgb(0 0 0 / 8%);
  box-sizing: border-box;
  z-index: 1000;

  .Case__Title {
    font-family: "Lobster", cursive;
    font-size: 12px;
    text-align: center;
    color: rgba(0, 0, 0, 0.48);
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }

  .Case__Desc {
    position: relative;
    font-family: "Lobster", cursive;
    font-weight: 700;
    font-size: 18px;
    text-align: center;
    color: rgba(0, 0, 0, 0.72);
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 50%;
      transform: translate(50%, 50%);
      width: 56%;
      height: 8px;
      background: rgba(0, 0, 0, 0.08);
    }
  }
`;

// eslint-disable-next-line no-mixed-operators
const CD = styled.div<StyledProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 92%;
  height: 92%;
  display: flex;
  align-items: center;
  justify-content: center;

  .CD__OutLine {
    position: absolute;
    width: 100%;
    object-fit: contain;
    z-index: 1;
  }

  .CD__Main {
    width: 96%;
    object-fit: contain;
    animation: ${(props) =>
      props.play ? "rotate 9.6s linear infinite" : "none"};

    @keyframes rotate {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  @media screen and (max-width: 560px) {
    width: 280px;
    height: 280px;
  }
`;

type Props = {
  onMouseOver?: () => void;
  play: boolean;
};

export default function CdCover(props: Props) {
  const { onMouseOver, play } = props;

  return (
    <CoverWrap>
      <img className="Cover__Deco-1" src="/cdDeco.svg" alt="cdDeco" />
      <img className="Cover__Deco-2" src="/cdDeco.svg" alt="cdDeco" />
      <Case>
        <div className="Case__Title">
          Origamibiro - Quad Time and the Genius of the Crowd
        </div>
        <div className="Case__Desc">Nothing happened</div>
      </Case>

      <CD play={play}>
        <img
          className="CD__OutLine"
          src="https://raw.githubusercontent.com/banjag954/portfolio_cole/master/build/cd_outline%403x.png"
          alt=""
          onMouseOver={onMouseOver}
        />
        <img
          className="CD__Main"
          src="https://raw.githubusercontent.com/banjag954/portfolio_cole/master/build/cd%403x.png"
          alt=""
          onMouseOver={onMouseOver}
        />
      </CD>
    </CoverWrap>
  );
}
