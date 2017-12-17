import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../Button';
import Month from '../Month';
import FeedItem from '../FeedItem';
import FacebookPost from '../FacebookPost';
import FacebookPostWithExplanation from '../FacebookPostWithExplanation';
import Tweet from '../Tweet';

function February(props) {
    const tweet = {
        text: 'Help, I\'m a Front End Developer at #hashcode2017. #dontbelonghere #notsmartenough :o',
        date: '2017-02-23'
    }

    return (
        <Month
            title="February"
        >
            <Tweet
                item={tweet}
            />
        </Month>
    );
}

export default February;