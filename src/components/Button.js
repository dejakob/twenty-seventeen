import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    appearance: none;
    padding: 0 16px;
    height: 36px;
    border-radius: 18px;
    border: none;
    background-color: #333333;
    color: #ffffff;

    display: inline-flex;
    align-items: center;
    
    cursor: pointer;

    &+button {
        margin-left: 16px;
    }
    &[disabled] {
        opacity: 0.2;
    }
`;

export default Button;