import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../Button';
import Month from '../Month';
import FeedItem from '../FeedItem';
import FacebookPost from '../FacebookPost';
import FacebookPostWithExplanation from '../FacebookPostWithExplanation';
import ImageDivider from '../ImageDivider';

const Line = styled.hr`
    border-top: none;
    border-right: 1px dashed #ccc;
    border-bottom: none;
    border-left: none;
    border-image: initial;
    height: 30vh;
    width: 4px;
    margin-top: -10px;
`;

// Add FB post with atob and binary decription
function January(props) {
    return (
        <Month
            title="January"
        >
            <FeedItem>
                <FacebookPost
                    item={props.feed.facebook['dejakob/posts/1307694509269299']}
                />
            </FeedItem>
            <Line />
            <FeedItem>
                <FacebookPost
                    item={props.feed.facebook['dejakob/posts/1309292115776205']}
                />
            </FeedItem>
            <Line />
            <Post_1316091521762931 {...props} />
            <FeedItem>
            <Line />
                <FacebookPost
                    item={props.feed.facebook['dejakob/posts/1317331584972258']}
                />
            </FeedItem>
            <Line />
            <FeedItem>
                <FacebookPostWithExplanation
                    item={props.feed.facebook['dejakob/posts/1319690541403029']}
                    explanation={`
                        Or... in other words...
                        Make data driven decissions
                    `}
                ></FacebookPostWithExplanation>
            </FeedItem>
            <Line />
            <FeedItem>
                <FacebookPost
                    item={props.feed.facebook['photo.php?fbid=1325499997488750']}
                />
            </FeedItem>
            <Line />
            <ImageDivider
                imageSource="./assets/antwerp.jpg"
            />
        </Month>
    );
}


const ExplanationCode = styled.code`
    display: block;
    margin-top: 24px;
    line-height: 24px;
    max-height: 100px;
    overflow: auto;
`;
const Fieldset = styled.fieldset`
    margin-top: 16px
`;

// Todo: slide transition on scroll to position
class Post_1316091521762931 extends React.Component {
    constructor() {
        super();
        this.decodeBase64 = this.decodeBase64.bind(this);
        this.decodeBinary = this.decodeBinary.bind(this);
    }

    componentWillMount() {
        this.state = {
            isBase64Decoded: false,
            isBinaryDecoded: false,
            originalValue: this.props.feed.facebook['dejakob/posts/1316091521762931'].text,
            decodedValue: ''
        }
    }

    decodeBase64() {
        this.setState({
            isBase64Decoded: true,
            decodedValue: atob(this.state.originalValue)
        });
    }

    decodeBinary() {
        this.setState({
            isBinaryDecoded: true,
            decodedValue: this.state.decodedValue
                .split(' ')
                .map(bin => parseInt(bin, 2))
                .map(num => String.fromCharCode(num))
                .join('')
        })
    }

    render() {
        return (
            <FeedItem>
                <FacebookPostWithExplanation
                    alignExplanationLeft={true}
                    item={this.props.feed.facebook['dejakob/posts/1316091521762931']}
                    explanation={`
                        No one seemed to crack this at the time, but it was very simple:
                        First decode the base64 string to binary, then convert the binary to text
                    `}
                >
                    <Fieldset>
                        <Button onClick={this.decodeBase64} disabled={this.state.isBase64Decoded}>Base64 decode</Button>
                        <Button onClick={this.decodeBinary} disabled={!this.state.isBase64Decoded || this.state.isBinaryDecoded}>Binary decode</Button>
                    </Fieldset>
                    <ExplanationCode>
                        {this.state.decodedValue}
                    </ExplanationCode>
                </FacebookPostWithExplanation>
            </FeedItem>
        )
    }
}

export default January;