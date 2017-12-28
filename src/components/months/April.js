import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../Button';
import Divider from '../Divider';
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
        this.setState({
            storyVisible: true
        })
    }

    render() {
        return (
            <div>
                <Divider />
                <FacebookPostWithExplanation
                    item={this.props.feed.facebook['dejakob/posts/1411105048928244']}
                    explanation={`
                        This is not a funny story,
                        but it's an important one.
                    `}
                >
                    <Button
                        onClick={this.showStory}
                    >
                        Read
                    </Button>
                </FacebookPostWithExplanation>
                <StoryView
                    visible={this.state.storyVisible}
                />
                <Divider />
            </div>
        );
    }
}


const ReactMarkdown = require('react-markdown');
const storyMds = [
    require('../../jakez-story/README.md')
];
const Dialog = styled.dialog`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    background: #fff;
    overflow: auto;
`;
const Page = styled.article`
    background-color: #fff;
    width: 960px;
    max-width: 95%;
    padding: 32px;
    margin: 32px 0;
    border-radius: 4px;

    & h1 {
        font-size: 32px;
        margin-top: 16px;
        margin-bottom: 24px;
    }
    & p {
        margin-bottom: 24px;
    }
    & h2 {
        font-size: 24px;
        margin-top: 32px;
        margin-bottom: 24px;
    }
    & li {
        list-style: disc;
        margin-left: 24px;
        margin-bottom: 16px;
    }
`;

class StoryView extends React.Component {
    constructor() {
        super();

        this.state = {
            story: []
        };
    }

    componentWillMount() {
        this.loadStory();
    }

    async loadStory() {
        let story = [];

        try {
            for (let chapterMd of storyMds) {
                const response = await fetch(chapterMd);
                story.push(await response.text());
                this.setState({ story });
            }
        }
        catch (ex) {
            console.log('ex',  ex);
        }
    }

    render() {
        console.log('story', this.state.story);

        if (!this.props.visible) {
            return false;
        }

        return (
            <Dialog>
                {this.state.story.map(chapter => 
                    <Page>
                        <ReactMarkdown source={chapter} />
                    </Page>
                )}
            </Dialog>
        );
    }
}

export default April;