import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PageOpening from "../../components/PageOpening";
import ChannelBtn from "../../components/ChannelBtn";
import CdCover from "../../components/CdCover";
import Background from "../../components/Background";

type StyledProps = {
  play: boolean;
};

const CanvasWrap = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 8px;
  box-sizing: border-box;
  z-index: -1;
`;

const HomeWrapper = styled.div`
  position: absolute;
  top: 56%;
  left: 50%;
  transition: opacity 0.4s ease-in;
  transform: translate(-50%, -50%);
  user-select: none;
  opacity: 0;

  animation: openAni 6s ease forwards;

  @keyframes openAni {
    75% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .Home__Btns {
    margin: 24px auto 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 240px;
  }
`;

const HomeDeco = styled.section<StyledProps>`
  display: block;
  visibility: visible;
  z-index: -2;

  .Deco__Points {
    position: absolute;
    opacity: 1;
  }
  .Right {
    top: -64px;
    right: 0;
    animation: ${(props) =>
      props.play ? "fadeInOut 4.8s ease 2.4s infinite" : "none"};
  }
  .Left {
    top: -64px;
    left: 0;
    animation: ${(props) =>
      props.play ? "fadeInOut 4.8s ease infinite" : "none"};
  }
  @keyframes fadeInOut {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const DecoCircle = styled.div<StyledProps>`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #4b4b4be0;
  z-index: -1;

  &.CircleLeft {
    top: -10px;
    left: -8px;
    animation: ${(props) =>
      props.play ? "colorAni 6.4s ease 3.2s infinite alternate" : "none"};
  }

  &.CircleRight {
    position: absolute;
    top: -10px;
    right: -8px;
    animation: ${(props) =>
      props.play ? "colorAni 6.4s ease infinite alternate" : "none"};
  }

  @keyframes colorAni {
    0% {
      background: #4b4b4be0;
    }
    50% {
      background: #4d3825e0;
    }
    100% {
      background: #907578e0;
    }
  }
`;

const PlayBtn = styled.div`
  display: flex;
  width: 56px;
  height: 56px;
  background: #40474e;
  fill: #fafafa;
  border-radius: 50%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  transition: background-color 0.16s ease, box-shadow 0.16s ease;
  cursor: none;
  &:hover {
    background: #2d3236;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.16);
  }

  img {
    padding: 12px;
  }
`;

type Props = {
  cursorMouseOver?: () => void;
};

function Home(props: Props) {
  const [play, setPlay] = useState(false);
  const [audio, setAudio] = useState(
    new Audio(
      "https://raw.githubusercontent.com/banjag954/portfolio_cole/master/build/Origamibiro.mp3"
    )
  );
  const CanvasRef = useRef<HTMLCanvasElement>(null);

  // useEffect(() => {
  //   var ctx = CanvasRef.current?.getContext("2d");
  //   CanvasRef?.current.width = window.innerWidth;
  //   CanvasRef?.height = window.innerHeight;
  //   var ctxW = Canvas.width;
  //   var ctxY = Canvas.height;

  //   function circle(x, y, Radius, fillStyle, alpha) {
  //     this.xPosition = x;
  //     this.yPosition = y;
  //     this.Radius = Radius;
  //     this.fillStyle = fillStyle;
  //     this.Alpha = alpha;

  //     this.draw = function () {
  //       ctx.clearRect(0, 0, ctxW, ctxY);
  //       ctx.beginPath();
  //       ctx.arc(this.xPosition, this.yPosition, this.Radius, 0, 2 * Math.PI);
  //       ctx.fillStyle = this.fillStyle;
  //       ctx.globalAlpha = this.Alpha;
  //       ctx.fill();
  //     };

  //     this.update = function () {
  //       if (this.Radius < 320) {
  //         this.Radius += 1.5;
  //         this.draw();
  //       } else if (this.Radius < 340) {
  //         this.Radius += 1;
  //         this.Alpha -= 0.07;
  //         this.draw();
  //       } else if ((this.Radius = 340)) {
  //         ctx.clearRect(0, 0, ctxW, ctxY);
  //       }
  //     };

  //     this.reset = function () {
  //       this.xPosition = Math.random() * Canvas.width;
  //       this.yPosition = Math.random() * Canvas.height;
  //       this.Radius = 0;
  //       this.Alpha = 1;
  //     };
  //   }

  //   let Circle1 = new circle(400, 300, 0, "#000000", 0.16);
  //   window.setInterval(resetCircle, 8000);
  //   function resetCircle() {
  //     Circle1.reset();
  //   }
  //   function animate() {
  //     requestAnimationFrame(animate);
  //     Circle1.update();
  //   }
  //   animate();
  // }, []);

  const onAudioPlay = () => {
    setPlay(true);
    audio.play();
    audio.onended = () => setPlay(false);
  };

  const onAudioPause = () => {
    setPlay(false);
    audio.pause();
    audio.onended = () => setPlay(false);
  };

  return (
    <>
      <PageOpening
        title={"Hello, Nice to meet you"}
        emoji={"👋"}
        desc={"Thank you for visiting my website :)"}
      />
      <HomeWrapper>
        <CdCover onMouseOver={props.cursorMouseOver} play={play} />

        <section className="Home__Btns">
          <ChannelBtn
            href="https://www.behance.net/kimjunsoo"
            onMouseOver={props.cursorMouseOver}
          >
            <img src="behance.svg" alt="" />
          </ChannelBtn>

          {/* <audio
            ref={audioRef}
            src="https://raw.githubusercontent.com/banjag954/portfolio_cole/master/build/Origamibiro.mp3"
          /> */}
          {play ? (
            <PlayBtn onMouseOver={props.cursorMouseOver} onClick={onAudioPause}>
              <img src="/music-play.svg" alt="" />
            </PlayBtn>
          ) : (
            <PlayBtn onMouseOver={props.cursorMouseOver} onClick={onAudioPlay}>
              <img src="/music-stop.svg" alt="" />
            </PlayBtn>
          )}
          <ChannelBtn
            href="https://github.com/banjag954"
            onMouseOver={props.cursorMouseOver}
          >
            <img src="github.svg" alt="" />
          </ChannelBtn>
        </section>

        <HomeDeco play={play}>
          <img
            className="Deco__Points Left"
            src="deco-points.svg"
            alt="Deco__Points"
          />
          <img
            className="Deco__Points Right"
            src="deco-points.svg"
            alt="Deco__Points"
          />
          <DecoCircle className="CircleLeft" play={play} />
          <DecoCircle className="CircleRight" play={play} />
        </HomeDeco>
      </HomeWrapper>
      <CanvasWrap id="Canvas" ref={CanvasRef} />
      <Background />
    </>
  );
}

export default Home;
