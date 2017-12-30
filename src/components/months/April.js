import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../Button';
import Divider from '../Divider';
import ImageDivider from '../ImageDivider';
import Month from '../Month';
import FeedItem from '../FeedItem';
import FacebookPost from '../FacebookPost';
import FacebookPostWithExplanation from '../FacebookPostWithExplanation';


function April(props) {
    return (
        <Month
            title="April"
        >
            <FeedItem>
                <Post_1411105048928244 {...props} />
            </FeedItem>
        </Month>
    );
}

class Post_1411105048928244 extends React.Component {
    constructor() {
        super();

        this.state = {
            storyVisible: false
        };

        this.showStory = this.showStory.bind(this);
    }

    showStory() {
        window.open('http://dejakob.com/blog/jakez-story');
    }

    render() {
        return (
            <div>
                <FacebookPostWithExplanation
                    alignExplanationLeft
                    item={this.props.feed.facebook['dejakob/posts/1386957534676329']}
                    explanation={`
                        I 😻 Amsterdam
                    `}
                />
                <Divider />
                <FacebookPostWithExplanation
                    item={this.props.feed.facebook['dejakob/posts/1391176094254473']}
                    explanation={`
                        💣 alert 😱😱😱😱
                    `}
                />
                <Divider />
                <FacebookPostWithExplanation
                    alignExplanationLeft
                    item={this.props.feed.facebook['dejakob/posts/1411105048928244']}
                    explanation={`
                        This is not a funny story,
                        but it's an important one.
                    `}
                >
                    <Button
                        onClick={this.showStory}
                        style={{ marginTop: '16px' }}
                    >
                        Read
                    </Button>
                </FacebookPostWithExplanation>
                <Divider />
                <ImageDivider
                    imageSource={`${process.env.PUBLIC_URL}/assets/antwerp4.jpg`}
                />
            </div>
        );
    }
}

export default April;