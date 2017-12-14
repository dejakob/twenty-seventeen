import React from 'react';
import January from './months/January';

function MonthsList(props) {
    const { feed } = props;
    const months = [ January ];

    return (
        <ul>
            {months.map((Month, index) => 
                <Month feed={feed} key={index} />
            )}
        </ul>
    );
}

export default MonthsList;