import React from 'react';
import styled from 'styled-components';
import OnVisible from 'react-on-visible';

const Section = styled.section`
    position: relative;

    &+section {
        margin-top: 30vh;
    }
`;

function FeedItem(props) {
    return (
        <Section>
            <OnVisible>
                {props.children}
            </OnVisible>
        </Section>
    );
}

export default FeedItem;
