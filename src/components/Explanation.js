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
    width: 100%;

    @media (min-width: 1200px) {
        background: none;
        width: 100%;
        color: #293a7b;
        text-align: center;
    }
`;
const Description = styled.div`
    font-family: 'Sacramento', cursive;
    font-size: 36px;
    font-weight: 100;

    & p + p {
        margin-top: 16px;
    }
`;  

function Explanation(props) {
    return (
        <Wrapper
            className={props.className}
            style={props.style}
        >
            <Container>
                <Description>
                    {props.description.split('\n').filter(line => line.trim().length > 0).map(line => <p>{line}</p>)}
                </Description>
                {props.children}
            </Container>
        </Wrapper>
    );
}

export default Explanation;
