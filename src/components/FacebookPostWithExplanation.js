import React from 'react';
import styled, { keyframes } from 'styled-components';
import Explanation from './Explanation';
import FacebookPost from './FacebookPost';

const FacebookPostStyled = styled(FacebookPost)`
    @media (min-width: 1200px) {
        transform: translate(0);
        transition: transform 0.4s;

        .visible & {
            transform: translate(-200px);
        }
    }
`;
const opacityAnimation = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;
const ExplanationWithAnimation = styled(Explanation)`
    @media (min-width: 1200px) {
        opacity: 0;
        position: absolute;
        top: -35px;
        bottom: 0;
        left: 620px;
        width: 380px;

        .visible & {
            opacity: 1;
            animation: 0.8s ${opacityAnimation};
        }
    }
`;

function FacebookPostWithExplantion(props) {
    const explanationStyle = {};
    let FbPostComponent = FacebookPostStyled;

    if (props.alignExplanationLeft) {
        explanationStyle.left = '-410px';
        FbPostComponent = styled(FbPostComponent)`
            @media (min-width: 1200px) {        
                .visible & {
                    transform: translate(200px);
                }
            }
        `;
    }

    return (
        <FbPostComponent
            item={props.item}
        >
            <ExplanationWithAnimation
                description={props.explanation}
                style={explanationStyle}
            >
                {props.children}
            </ExplanationWithAnimation>
        </FbPostComponent>
    )
}

export default FacebookPostWithExplantion;