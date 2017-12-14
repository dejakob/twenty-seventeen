import React from 'react';
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
                <FacebookPost
                    item={this.props.feed.facebook['dejakob/posts/1316091521762931']}
                >
                    <Explanation>
                        <p>No one seemed to crack this at the time, but it was very simple:</p>
                        <p>First decode the base64 string to binary, then convert the binary to text</p>
                        <button onClick={this.decodeBase64} disabled={this.state.isBase64Decoded}>Base64 decode</button>
                        <button onClick={this.decodeBinary} disabled={!this.state.isBase64Decoded || this.state.isBinaryDecoded}>Binary decode</button>
                        <pre>
                            {this.state.decodedValue}
                        </pre>
                    </Explanation>
                </FacebookPost>
            </FeedItem>
        )
    }
}

export default January;