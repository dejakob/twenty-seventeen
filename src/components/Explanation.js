import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;
const Container = styled.summary`
    border-radius: 3px;
    background-color: #f4fbff;
    padding: 24px;
`;
const Description = styled.p`
    font-family: 'Sacramento', cursive;
    font-size: 36px;
    font-weight: 100;
    margin-bottom: 24px;
`;  

function Explanation(props) {
    return (
        <Wrapper
            className={props.className}
            style={props.style}
        >
            <Container>
                <Description>
                    {props.description}
                </Description>
                {props.children}
            </Container>
        </Wrapper>
    );
}

export default Explanation;
