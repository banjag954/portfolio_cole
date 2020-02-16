import React from "react";
import HomeWrapper from "./Styles";
import Div100vh from "react-div-100vh";

import PageOpening from "../PageOpening";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            didMount: false
        };
    }

    componentDidMount() {
        const canvas = this.refs.Canvas;
        var ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var ctxW = canvas.width;
        var ctxY = canvas.height;

        function circle(x, y, Radius, fillStyle, alpha) {
            this.xPosition = x;
            this.yPosition = y;
            this.Radius = Radius;
            this.fillStyle = fillStyle;
            this.Alpha = alpha;

            this.draw = function() {
                ctx.clearRect(0, 0, ctxW, ctxY);
                ctx.beginPath();
                ctx.arc(
                    this.xPosition,
                    this.yPosition,
                    this.Radius,
                    0,
                    2 * Math.PI
                );
                ctx.fillStyle = this.fillStyle;
                ctx.globalAlpha = this.Alpha;
                ctx.fill();
            };

            this.update = function() {
                if (this.Radius < 320) {
                    this.Radius += 1.5;
                    this.draw();
                } else if (this.Radius < 340) {
                    this.Radius += 1;
                    this.Alpha -= 0.07;
                    this.draw();
                } else if ((this.Radius = 340)) {
                    ctx.clearRect(0, 0, ctxW, ctxY);
                }
            };

            this.reset = function() {
                this.xPosition = Math.random() * canvas.width;
                this.yPosition = Math.random() * canvas.height;
                this.Radius = 0;
                this.Alpha = 1;
            };
        }

        let Circle1 = new circle(400, 300, 0, "#CCE5EB", 0.56);

        window.setInterval(resetCircle, 8000);

        function resetCircle() {
            Circle1.reset();
        }

        function animate() {
            requestAnimationFrame(animate);
            Circle1.update();
            // console.log(Circle1);
        }

        animate();

        setTimeout(() => {
            this.setState({
                pageOpen: true
            });
        }, 4000);
    }

    render() {
        return (
            <>
                <PageOpening
                    textTitle={"Hello, Nice to meet you"}
                    titleDeco={"👋"}
                    textDesc={"Thank you for visiting my website :)"}
                />
                <Div100vh>
                    <HomeWrapper
                        style={
                            this.state.pageOpen === true
                                ? { opacity: 1 }
                                : { opacity: 0 }
                        }
                    >
                        <span className="prepare">
                            Preparing
                            <br />
                            Now...
                        </span>
                        <canvas
                            id="Canvas"
                            className="Canvas"
                            ref="Canvas"
                        ></canvas>

                        <div className="HomeBackground" />
                    </HomeWrapper>
                </Div100vh>
            </>
        );
    }
}

export default Home;
