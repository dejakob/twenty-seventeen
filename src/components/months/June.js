import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../Button';
import Divider from '../Divider';
import Month from '../Month';
import FeedItem from '../FeedItem';
import FacebookPost from '../FacebookPost';
import FacebookPostWithExplanation from '../FacebookPostWithExplanation';
import Tweet from '../Tweet';

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
        </Month>
    );
}

export default June;