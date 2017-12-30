import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../Button';
import Divider from '../Divider';
import Month from '../Month';
import FeedItem from '../FeedItem';
import FacebookPost from '../FacebookPost';
import FacebookPostWithExplanation from '../FacebookPostWithExplanation';

function September(props) {
    return (
        <Month
            title="September"
        >
            <Divider />
            <FeedItem>
                <FacebookPostWithExplanation
                    alignExplanationLeft
                    item={props.feed.facebook['dejakob/posts/1541750649197016']}
                    explanation={`
                        Yes, that's true.
                        That actually happened
                    `}
                ></FacebookPostWithExplanation>
            </FeedItem>
            <Divider />
            <FeedItem>
                <FacebookPostWithExplanation
                    item={props.feed.facebook['dejakob/posts/1551434188228662']}
                    explanation={`
                        It's a conspiracy
                        No one else noticed, but I did 😉
                    `}
                ></FacebookPostWithExplanation>
            </FeedItem>
            <Divider />
        </Month>
    );
}

export default September;