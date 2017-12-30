import React from 'react';
import InstagramEmbed from '../Instagram';
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

function December(props) {
    return (
        <Month
            title="December"
        >
            <Divider />
            <InstagramWrapper>
                <InstagramEmbed
                    url="https://www.instagram.com/p/Bcxdv_NAo2Y"
                />
                <Divider />
                <InstagramEmbed
                    url="https://www.instagram.com/p/BdIJ_WrAMdq"
                />
            </InstagramWrapper>
            <Divider />
        </Month>
    );
}

export default December;