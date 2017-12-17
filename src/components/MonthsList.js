import React from 'react';
import January from './months/January';
import February from './months/February';

function MonthsList(props) {
    const { feed } = props;
    const months = [ January, February ];

    return (
        <ul>
            {months.map((Month, index) => 
                <Month feed={feed} key={index} />
            )}
        </ul>
    );
}

export default MonthsList;