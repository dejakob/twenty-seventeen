import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../Button';
import Divider from '../Divider';
import ImageDivider from '../ImageDivider';
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

function May(props) {
    return (
        <Month
            title="May"
        >
            <Divider />
            <FeedItem>
                <Center>
                    <H2>
                        Short summary of the month May:
                    </H2>
                    <Emojis>
                        <em>🏃‍</em>
                        <em>🍺</em>
                        <em>💻</em>
                    </Emojis>
                </Center>
            </FeedItem>
            <Divider />
            <ImageDivider
                imageSource="/assets/antwerp5.jpg"
            />
        </Month>
    );
}

export default May;