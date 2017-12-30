import React from 'react';
import styled from 'styled-components';

const MonthListItem = styled.li`
    padding: 5vh 0;

    @media (min-width: 1200px) {
        min-height: 100vh;
        padding: 10vh 0;
    }
`;
const MonthTitle = styled.h2`
    margin-bottom: 5vh;
    padding: 16px;
    text-align: center;
    text-transform: uppercase;
    font-size: 24px;

    @media (min-width: 1200px) {
        margin-bottom: 10vh;
    }
`;

function Month(props) {
    return (
        <MonthListItem>
            <MonthTitle>
                {props.title}
            </MonthTitle>
            {props.children}
        </MonthListItem>
    );
}

export default Month;
