import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../Button';
import Divider from '../Divider';
import Month from '../Month';
import FeedItem from '../FeedItem';
import FacebookPost from '../FacebookPost';
import FacebookPostWithExplanation from '../FacebookPostWithExplanation';

function November(props) {
    return (
        <Month
            title="November"
        >
            <Divider />

            <Divider />
        </Month>
    );
}

export default November;