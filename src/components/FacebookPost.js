import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border-radius: 3px;

    &::before {
        content: url('./assets/fb-profile-pic-100x100.jpg');
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }
`;

function FacebookPost() {
    return (
        <Container>

        </Container>
    );
}

export default FacebookPost;
