import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../Button';
import Month from '../Month';
import FeedItem from '../FeedItem';
import FacebookPost from '../FacebookPost';
import FacebookPostWithExplanation from '../FacebookPostWithExplanation';

function April(props) {
    return (
        <Month
            title="April"
        >
            <FeedItem>
                <FacebookPostWithExplanation
                    item={props.feed.facebook['dejakob/posts/1411105048928244']}
                    explanation={`
                        This is not a funny story,
                        but it's an important one.
                    `}
                >
                    <Button
                        onClick={() => {}}
                    >
                        Read
                    </Button>
                </FacebookPostWithExplanation>
            </FeedItem>
        </Month>
    );
}

export default April;