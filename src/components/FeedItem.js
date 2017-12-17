import React from 'react';
import styled from 'styled-components';
import OnVisible from 'react-on-visible';

const Section = styled.section`
    position: relative;
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
