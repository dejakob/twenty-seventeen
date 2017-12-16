import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    border-radius: 3px;
    border-top: 35px #3b5998 solid;
    border-right: 1px #3b5998 solid;
    border-bottom: 1px #3b5998 solid;
    border-left: 1px #3b5998 solid;
    width: 600px;
    max-width: 90%;
    margin: 0 auto;

    &::before {
        content: '';
        display: block;
        background-image: url('./assets/fb-profile-pic-100x100.jpg');
        background-size: cover;
        background-position: center center;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        position: absolute;
        top: -60px;
        left: 50%;
        margin-left: -25px;
        border: 3px #3b5998 solid;
    }
`;
const Paragraph = styled.p`
    font-size: 16px;
    line-height: 22px;
    padding: 24px;
    word-wrap: break-word;
    text-align: justify;

    &+p {
        padding-top: 0;
    }
`;
const Footer = styled.div`
    background-color: #f7f7f7;
    text-align: right;
    font-size: 14px;
    padding: 16px;
`;
const Figure = styled.figure`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000;
`;
const Image = styled.img`
    max-height: 400px;
    max-width: 100%;
`;

function FacebookPost(props) {
    const { item } = props;
    const pStyle = {};

    let media = null;

    if (item.text.length < 200) {
        pStyle.fontSize = '22px';
        pStyle.lineHeight = '30px';
        pStyle.textAlign = 'left';
    }
    if (item.text.length < 100) {
        pStyle.fontSize = '26px';
        pStyle.lineHeight = '32px';
        pStyle.textAlign = 'center';
    }

    if (item.image) {
        media = (
            <Figure>
                <Image
                    src={item.image}
                />
            </Figure>    
        );
    }

    return (
        <Container
            className={props.className}
        >            
            {item.text.split('\n').map(item => (
                <Paragraph style={pStyle}>
                    {item}
                </Paragraph>
            ))}
            {props.children}
            {media}
            <Footer>
                {moment(item.date, 'YYYY-MM-DD').format('dddd, MMMM Do YYYY')}
            </Footer>
        </Container>
    );
}

export default FacebookPost;
