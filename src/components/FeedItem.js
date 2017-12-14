import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    position: relative;

    &+section {
        margin-top: 20vh;
    }
`;

function FeedItem(props) {
    return (
        <Section>
            {props.children}
        </Section>
    );
}

export default FeedItem;
