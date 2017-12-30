import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
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

function November(props) {
    return (
        <Month
            title="November"
        >
            <Divider />
                <InstagramWrapper>
                    <InstagramEmbed
                        url="https://www.instagram.com/p/BbHNB-qg0oE"
                    />
                    <Divider />
                    <InstagramEmbed
                        url="https://www.instagram.com/p/Bckb7pfglTe"
                    />
                </InstagramWrapper>
            <Divider />
            <ImageDivider
                imageSource={`${process.env.PUBLIC_URL}/assets/pleinpubliek.jpg`}
            />
        </Month>
    );
}

export default November;