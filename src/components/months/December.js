import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import styled, { keyframes } from 'styled-components';
import Button from '../Button';
import Month from '../Month';
import FeedItem from '../FeedItem';
import FacebookPost from '../FacebookPost';
import FacebookPostWithExplanation from '../FacebookPostWithExplanation';

const InstagramWrapper = styled.div`
    & iframe {
        margin: 0 auto!important;
    }
`;

function December(props) {
    return (
        <Month
            title="December"
        >
        </Month>
    );
}

export default December;