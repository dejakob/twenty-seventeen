import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../Button';
import Divider from '../Divider';
import Month from '../Month';
import FeedItem from '../FeedItem';
import FacebookPost from '../FacebookPost';
import FacebookPostWithExplanation from '../FacebookPostWithExplanation';

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


function July(props) {
    return (
        <Month
            title="July"
        >
            <Divider />
            <Center>
                <H2>Short summary of the month July:</H2>
                <Emojis>☀️🍹🕺</Emojis>
            </Center>
            <Divider />
        </Month>
    );
}

export default July;