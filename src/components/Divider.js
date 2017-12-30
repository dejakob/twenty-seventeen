import React from 'react';
import styled from 'styled-components';

const Divider = styled.hr`
    border-top: none;
    border-right: 1px dashed #ccc;
    border-bottom: none;
    border-left: none;
    border-image: initial;
    height: 15vh;
    width: 4px;
    margin-top: -10px;

    @media (min-width: 1200px) {
        height: 30vh;
    }
`;

export default Divider;