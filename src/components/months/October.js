import React from 'react';
import InstagramEmbed from 'react-instagram-embed'
import styled, { keyframes } from 'styled-components';
import Button from '../Button';
import Divider from '../Divider';
import Month from '../Month';
import FeedItem from '../FeedItem';
import FacebookPost from '../FacebookPost';
import FacebookPostWithExplanation from '../FacebookPostWithExplanation';

const InstagramWrapper = styled.div`
    & iframe {
        margin: 0 auto!important;
    }
`;

function October(props) {
    return (
        <Month
            title="October"
        >
            <Divider />
                <InstagramWrapper>
                    <InstagramEmbed
                        url="https://www.instagram.com/p/BaPKvVBgC1w"
                    />
                    <Divider />
                    <InstagramEmbed
                        url="https://www.instagram.com/p/BaQ-yp_gbUl"
                    />
                </InstagramWrapper>
            <Divider />
        </Month>
    );
}

export default October;