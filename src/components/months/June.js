import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../Button';
import Divider from '../Divider';
import Month from '../Month';
import FeedItem from '../FeedItem';
import FacebookPost from '../FacebookPost';
import FacebookPostWithExplanation from '../FacebookPostWithExplanation';
import Tweet from '../Tweet';

const H2 = styled.h2`
    font-size: 28px;
    margin-bottom: 32px;
`;
const Emojis = styled.p`
    font-size: 36px;
    margin-bottom: 32px;
`;
const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

function June(props) {
    const tweet = {
        text: 'I also want a hug from @ArianaGrande now 😍 #OneLoveManchester',
        date: '2017-06-04'
    };

    return (
        <Month
            title="June"
        >
            <Divider />
            <Tweet
                item={tweet}
            />
            <Divider />
            <Center>
                <H2>The end of FLAVR</H2>
                <Emojis>🔥🔥🔥</Emojis>
                <Divider />
            </Center>
        </Month>
    );
}

export default June;