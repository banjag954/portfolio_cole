import styled from "styled-components";

const HomeWrapper = styled.div`
    width: 100vw;
    height: 100%;
    transition: opacity 0.4s ease-in;

    .prepare {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        font-family: "Lobster", cursive;
        font-size: 56px;
        color: #333;
        display: block;
        text-align: center;
        user-select: none;
    }

    .HomeBackground {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100%;
        border: 8px solid #e4e4e4;
        box-sizing: border-box;
        user-select: none;
        z-index: -3;

        .vertical {
            display: inline-block;
            width: 33.3%;
            height: 100%;
            box-sizing: border-box;
            background: rgba(255, 255, 255, 0.8);
            border-right: 1px solid #eee;
        }
    }

    .Canvas {
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -4;
    }
`;

const HomeDeco = styled.section`
    display: block;
    visibility: visible;
    z-index: -2;

    .main_01 {
        position: absolute;
        top: -88px;
        left: -104px;
    }

    .main_02 {
        position: absolute;
        top: -72px;
        left: -80px;
    }

    .main_03 {
        position: absolute;
        top: -64px;
        right: -56px;
    }

    .main_04 {
        position: absolute;
        top: -48px;
        right: -72px;
        z-index: -1;
    }

    .main_05 {
        position: absolute;
        bottom: 96px;
        right: -104px;
    }

    .main_06 {
        position: absolute;
        bottom: 96px;
        left: -88px;
    }

    .main_07 {
        position: absolute;
        bottom: 112px;
        left: -104px;
        z-index: -1;
    }

    @media screen and (max-width: 700px) {
        display: none;
        visibility: hidden;
    }
`;

const MainContent = styled.section`
    position: absolute;
    top: 56%;
    left: 50%;
    transform: translate(-50%, -50%);
    user-select: none;

    .CD_Wrap {
        position: relative;
        margin: auto;
        width: 336px;
        height: 336px;

        .CD_deco1 {
            position: absolute;
            top: 0;
            left: 0;
        }

        .CD_deco2 {
            position: absolute;
            bottom: 0;
            right: 0;
        }

        .CD_outLine {
            position: absolute;
            width: 336px;
            z-index: 1;
        }
        .CD_main {
            margin: 16px;
            width: 304px;

            animation: rotate 9.6s linear infinite;
            @keyframes rotate {
                0% {
                    transform: rotate(0);
                }

                100% {
                    transform: rotate(360deg);
                }
            }
        }
    }
    @media screen and (max-width: 560px) {
        .CD_Wrap {
            width: 280px;
            height: 280px;

            .CD_outLine {
                position: absolute;
                width: 280px;
                z-index: 1;
            }
            .CD_main {
                margin: 7px;
                width: 266px;
            }
        }
    }

    .TimeLine {
        margin-top: 32px;

        font-family: "Lobster", cursive;
        font-size: 14px;
        text-align: center;
        color: #4b4b4b;
        @media screen and (max-width: 560px) {
            margin-top: 16px !important;
        }
    }

    .Line {
        margin: auto;
        margin-top: 8px;
        width: 240px;
        height: 1px;
        background: #bbb;
        @media screen and (max-width: 560px) {
            margin-top: 4px !important;
        }
    }

    .Project_Title {
        margin-top: 16px;
        // font-family: "Fredoka One", cursive;

        font-family: "Gothic A1", sans-serif;
        font-weight: 700;
        font-size: 16px;
        text-align: center;
        color: #2b2b2b;

        @media screen and (max-width: 560px) {
            margin-top: 8px !important;
        }
    }

    .Project_Btn {
        margin: auto;
        width: 128px;

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

            &:nth-child(2) {
                margin-right: 0;
            }

            &:hover,
            &:active {
                background: #e4e4e4;
                box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.16);
            }

            svg {
                padding: 6px;
            }
        }
    }
`;

export { HomeWrapper, HomeDeco, MainContent };
