import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../Button';
import Month from '../Month';
import FeedItem from '../FeedItem';
import Tweet from '../Tweet';
import Divider from '../Divider';
import Explanation from '../Explanation';
import ImageDivider from '../ImageDivider';

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
            <Divider />
            <Explanation
                description={`
                    That's it for February.
                    I mean, it's a short month.
                `}
            />
            <ImageDivider
                imageSource="./assets/antwerp2.jpg"
            />
        </Month>
    );
}

export default February;