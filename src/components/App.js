import React, { Component } from 'react';
import styled from 'styled-components';
import Front from './Front';
import MonthsList from './MonthsList';
import facebook from '../facebook.json';

const feed = {
    facebook
};

const Main = styled.main`
    margin: 0;
    padding: 0;
`;

class App extends Component {
    render() {
        return (
            <Main>
                <Front />
                <MonthsList
                    feed={feed}
                />
            </Main>
        );
    }
}

export default App;
