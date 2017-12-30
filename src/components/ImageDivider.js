import React from 'react';
import OnVisible from 'react-on-visible';
import styled, { keyframes } from 'styled-components';

const figureFadeIn = keyframes`
    from {
        visibility: hidden;
        opacity: 0;
    }
    to {
        opacity: 1;
        visibility: visible;
    }
`;
const Figure = styled.figure`
    background-position: center center;
    background-size: cover;
    height: 30vh;
    opacity: 0;
    visibility: hidden;

    .visible & {
        animation: ${figureFadeIn} 2s;
        opacity: 1;
        visibility: visible;
    }

    @media (min-width: 1200px) {
        background-attachment: fixed;
        height: 30vh;
    }
`;

function ImageDivider(props) {
    const FigureWithImage = styled(Figure)`
        .visible & {
            background-image: url(${props.imageSource});
        }
    `;

    return (
        <OnVisible>
            <FigureWithImage />
        </OnVisible>
    );
}

export default ImageDivider;