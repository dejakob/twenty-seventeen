import React from 'react';
import styled from 'styled-components';

const Container = styled.summary`
    border-radius: 3px;
    background-color: #f4fbff;
    padding: 24px;

    @media (min-width: 1200px) {
        position: absolute;
        top: 0;
        left: 620px;
        width: 380px;

    }
`;
const Description = styled.p`
    font-family: 'Sacramento', cursive;
    font-size: 36px;
    font-weight: 100;
    margin-bottom: 24px;
`;  

function Explanation(props) {
    return (
        <Container>
            <Description>
                {props.description}
            </Description>
            {props.children}
        </Container>
    );
}

export default Explanation;
