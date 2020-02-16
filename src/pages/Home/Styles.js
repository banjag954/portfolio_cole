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

    .Canvas {
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -3;
    }

    .HomeBackground {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100%;
        border: 8px solid #e4e4e4;
        box-sizing: border-box;
    }
`;

export default HomeWrapper;
