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
const H2 = styled.h2`
    margin: 32px 16px 64px 16px;
    font-size: 32px;
    text-align: center;
`;
const P = styled.p`
    font-size: 28px;
    text-align: center;

    & + p {
        margin-top: 24px;
    }
`;
const Small = styled.small`
    display: block;
    padding: 64px 0 32px 0;
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
            <H2>So, this was 2017</H2>
            <P className="handwriting">
                Life is like a video game
            </P>
            <P className="handwriting">
                Some levels are fun, <br />
                Some levels are hard
            </P>
            <P className="handwriting">
                You never know which level is next <br />
                But you want to play it anyway
            </P>
            <P className="handwriting">
                You can never go back to the previous level <br />
                And you have to move forward
            </P>
            <P className="handwriting">
                Let's play level 2018 <br />
                And activate some superpower
            </P>
            <Small>Special thanks to <a href="https://icons8.com" target="_blank">icons8</a> for some icons</Small>
        </Wrapper>
    );
}

export default Footer;