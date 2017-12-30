import React from 'react';
import styled from 'styled-components';

const FrontBackground = styled.article`
    background-image: url(${process.env.PUBLIC_URL}/assets/amsterdam-panorama.jpg);
    background-size: cover;
    background-position: center center;

    @media (min-width: 1200px) {
        background-attachment: fixed;
    }
`;
const FrontOverlay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.7);
    height: 100vh;

    &:after {
        content: '';
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-top: 20px solid #fff;
        position: absolute;
        bottom: 32px;
    }
`;
const FrontTitle = styled.h1`
    padding: 0 16px;
    font-size: 16vh;
    color: #ffffff;
`;
const FrontSubtitle = styled.span`
    font-family: 'Sacramento', cursive;
    text-align: center;
    font-size: 10vh;
    padding: 16px;
    color: #ffffff;
`;

function Front() {
    return (
        <FrontBackground>
            <FrontOverlay>
                <FrontTitle>2017</FrontTitle>
                <FrontSubtitle>Year in review</FrontSubtitle>
            </FrontOverlay>
        </FrontBackground>
    );
}

export default Front