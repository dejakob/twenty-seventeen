import React from 'react';
import InstagramEmbed from '../Instagram';
import styled, { keyframes } from 'styled-components';
import Button from '../Button';
import Divider from '../Divider';
import ImageDivider from '../ImageDivider';
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
            <ImageDivider
                imageSource={`${process.env.PUBLIC_URL}/assets/amsterdam3.jpg`}
            />
        </Month>
    );
}

export default October;