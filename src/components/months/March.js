import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../Button';
import Divider from '../Divider';
import Month from '../Month';
import FeedItem from '../FeedItem';
import FacebookPost from '../FacebookPost';
import FacebookPostWithExplanation from '../FacebookPostWithExplanation';

const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;
const SlideToCenter = styled(Center)`
    transform: translate(-100%);
    transition: transform 2s;

    .visible & {
        transform: translate(0);
    }
`;
const swagTextAnimation = keyframes`
    0% {
        transform: translate(-10px);
    }
    50% {
        transform: translate(10px);
    }
    100% {
        transform: translate(-10px);
    }
`;
const SwagText = styled.p`
    font-size: 24px;
    margin-bottom: 30px;

    & em {
        font-size: 36px;
        font-weight: 600;
    }

    .visible & {
        animation: 0.8s ${swagTextAnimation} infinite;
    }
`;

function March(props) {
    return (
        <Month
            title="March"
        >
            <FeedItem>
                <Divider />
                <SlideToCenter>
                    <img src="/assets/icons8-rollerblade.png" />
                </SlideToCenter>
                <Center>
                    <SwagText>
                        Skated <em>50km</em><br />
                        in less than<br />
                        <em>3 hours</em>
                    </SwagText>
                </Center>
                <Divider />
            </FeedItem>
        </Month>
    );
}

export default March;