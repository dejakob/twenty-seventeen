import React from 'react';
import styled from 'styled-components';

const Figure = styled.figure`
    background-position: center center;
    background-size: cover;
    height: 30vh;

    @media (min-width: 1200px) {
        background-attachment: fixed;
    }
`;

function ImageDivider(props) {
    return (
        <Figure
            style={{ backgroundImage: `url(${props.imageSource})` }}
        />
    );
}

export default ImageDivider;