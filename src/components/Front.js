import React from 'react';
import styled from 'styled-components';

const FrontBackground = styled.article`
    background-image: url(/assets/amsterdam-panorama.jpg);
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
`;
const FrontTitle = styled.h1`
    padding: 0 16px;
    font-size: 16vh;
    color: #ffffff;
`;
const FrontSubtitle = styled.span`
    font-family: 'Sacramento', cursive;
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