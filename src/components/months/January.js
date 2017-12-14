import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Month from '../Month';
import Explanation from '../Explanation';
import FeedItem from '../FeedItem';
import FacebookPost from '../FacebookPost';

// Add FB post with atob and binary decription
function January(props) {
    console.log('feed', props.feed);

    return (
        <Month
            title="January"
        >
            <FeedItem>
                <FacebookPost
                    item={props.feed.facebook['dejakob/posts/1307694509269299']}
                />
            </FeedItem>
            <FeedItem>
                <FacebookPost
                    item={props.feed.facebook['dejakob/posts/1309292115776205']}
                />
            </FeedItem>
            <Post_1316091521762931 {...props} />
            <FeedItem>
                <FacebookPost
                    item={props.feed.facebook['dejakob/posts/1317331584972258']}
                />
            </FeedItem>
            <FeedItem>
                <FacebookPost
                    item={props.feed.facebook['dejakob/posts/1319690541403029']}
                />
            </FeedItem>
            <FeedItem>
                <FacebookPost
                    item={props.feed.facebook['photo.php?fbid=1325499997488750']}
                />
            </FeedItem>
        </Month>
    );
}

const FacebookPostWithExplanation = styled(FacebookPost)`
    @media (min-width: 1200px) {
        transform: translate(-200px);
    }
`;
const ExplanationCode = styled.code`
    display: block;
    margin-top: 24px;
    line-height: 24px;
    max-height: 100px;
    overflow: auto;
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
                    item={this.props.feed.facebook['dejakob/posts/1316091521762931']}
                >
                    <Explanation
                        description={`
                            No one seemed to crack this at the time, but it was very simple:
                            First decode the base64 string to binary, then convert the binary to text
                        `}
                    >
                        <Button onClick={this.decodeBase64} disabled={this.state.isBase64Decoded}>Base64 decode</Button>
                        <Button onClick={this.decodeBinary} disabled={!this.state.isBase64Decoded || this.state.isBinaryDecoded}>Binary decode</Button>
                        <ExplanationCode>
                            {this.state.decodedValue}
                        </ExplanationCode>
                    </Explanation>
                </FacebookPostWithExplanation>
            </FeedItem>
        )
    }
}

export default January;