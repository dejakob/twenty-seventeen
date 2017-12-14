import React from 'react';
import styled from 'styled-components';

const Container = styled.summary`
    background-color: #f4fbff;
    padding: 24px;
`;

function Explanation(props) {
    return (
        <Container>
            {props.children}
        </Container>
    );
}

export default Explanation;
