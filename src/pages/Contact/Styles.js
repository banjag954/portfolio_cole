import styled from "styled-components";

const ContactWrap = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: auto;

    .IntroBackground {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100%;
        background: #fff;
        border: 8px solid #e4e4e4;
        box-sizing: border-box;
        z-index: -2;

        #SayHello {
            position: absolute;
            bottom: 32px;
            right: 48px;
            text-align: right;
            font-size: 18vw;
            color: #f5bd7b;
            font-family: "Lobster", cursive;
            transition: all ease-in-out 0.64s;
            z-index: 1;

            @media screen and (max-width: 1024px) {
                bottom: 50%;
                right: 50%;
                transform: translate(50%, 50%);
                text-align: center;
                font-size: 20vh !important;
            }
        }

        .vertical {
            display: inline-block;
            width: 12.5vw;
            height: 100vh;
            border-right: 1px solid #eee;
        }
        .horizon {
            position: absolute;
            display: inline-block;
            width: 100vw;
            height: 50vh;
            border-bottom: 1px solid #eee;
            float: right;
        }
    }

    .IntroWrap {
        position: fixed;
        top: 0;
        left: 0;
        width: 50vw;
        height: 100%;
        z-index: 1;
        user-select: none;

        @media screen and (max-width: 1024px) {
            width: 100vw;

            .intro {
                .myName {
                    font-size: 16px !important;
                    margin-top: 64px;
                    margin-bottom: 16px;
                }
                .myJob {
                    font-size: 40px !important;
                    font-weight: 700;
                    margin-bottom: 4px;
                    line-height: 104%;
                }
            }
            #Appear02 {
                left: 16px !important;
            }
            #Appear03 {
                bottom: 16px !important;
                right: 16px !important;
            }
        }

        .intro {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
            transition: all 0.56s ease;

            .myName {
                font-family: "Fredoka One", cursive;
                font-size: 24px;
                color: #60a3bc;
                margin-top: 64px;
                display: block;
                margin-bottom: 16px;
            }
            .myJob {
                font-family: "Gothic A1", sans-serif;
                font-size: 56px;
                font-weight: 700;
                color: #333;
                display: block;
                margin-bottom: 4px;
            }
            .btnIcon {
                display: inline-block;
                margin-right: 16px;
                margin-top: 16px;
                width: 56px;
                height: 56px;
                background: #fafafa;
                border-radius: 50%;
                box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
                transition: all 0.32s ease;
                cursor: none;
                &:hover,
                &:active {
                    background: #e4e4e4;
                    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.16);
                }

                svg {
                    padding: 6px;
                }
            }

            .etc {
                padding: 8px 12px;
                background: #4b4b4b;

                font-family: "Gothic A1", sans-serif;
                font-size: 16px;
                color: #fff;
                display: block;
                transition: all 0.24s ease;

                &:hover {
                    background: #333;
                }
                &:active {
                    background: #2b2b2b;
                }
            }
            .eMail {
                margin-top: 24px;
                margin-bottom: 8px;
            }
        }

        #Appear02 {
            position: absolute;
            top: 72px;
            left: 40px;
            transition: all 0.4s ease-in-out;
            transform: scale(0);
        }

        .topCircle {
            width: 10.4vw;
            height: 10.4vw;
            animation: pulse 5.6s linear infinite;

            @keyframes pulse {
                from {
                    transform: scale3d(1, 1, 1);
                }
                50% {
                    transform: scale3d(1.2, 1.2, 1.2);
                }
                to {
                    transform: scale3d(1, 1, 1);
                }
            }
        }

        #Appear03 {
            position: absolute;
            bottom: 96px;
            right: 96px;
            transform: scale(0);
            transition: all 0.4s ease-in-out;
        }

        .bottomCircle {
            width: 8vw;
            height: 8vw;
            animation: pulse 4s ease infinite;
            @keyframes pulse {
                from {
                    transform: scale3d(1, 1, 1);
                }
                50% {
                    transform: scale3d(1.1, 1.1, 1.1);
                }
                to {
                    transform: scale3d(1, 1, 1);
                }
            }
        }
    }
`;

export default ContactWrap;
