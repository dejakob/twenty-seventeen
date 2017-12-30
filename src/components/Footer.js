import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
    margin-top: -6vh;
    background-color: #333333;
    padding: 16px;
    color: #ffffff;

    @media (min-width: 1200px) {
        margin-top: -11vh;
    }
`;
const Small = styled.small`
    display: block;
    padding: 16px 0;
    text-align: center;
    font-size: 12px;

    & a {
        color: #fff;
        text-decoration: underline;
    }
`;

function Footer() {
    return (
        <Wrapper>
            <p></p>
            <Small>Special thanks to <a href="https://icons8.com" target="_blank">icons8</a> for some icons</Small>
        </Wrapper>
    );
}

export default Footer;