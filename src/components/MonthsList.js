import React from 'react';
import January from './months/January';
import February from './months/February';
import March from './months/March';
import April from './months/April';
import May from './months/May';
import June from './months/June';
import July from './months/July';
import August from './months/August';
import September from './months/September';
import October from './months/October';
import November from './months/November';
import December from './months/December';

function MonthsList(props) {
    const { feed } = props;
    const months = [
        January, February, March, April, May, June,
        July, August, September, October, November, December
    ];

    return (
        <ul>
            {months.map((Month, index) => 
                <Month feed={feed} key={index} />
            )}
        </ul>
    );
}

export default MonthsList;