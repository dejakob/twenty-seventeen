import React from 'react';
import styled from 'styled-components';

const MonthListItem = styled.li`
    min-height: 100vh;
`;
const MonthTitle = styled.h2`
    padding: 16px;
    text-align: center;
`;

function Month(props) {
    return (
        <MonthListItem>
            <MonthTitle>
                {props.title}
            </MonthTitle>
        </MonthListItem>
    );
}

export default Month;
