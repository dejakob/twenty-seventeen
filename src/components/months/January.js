import React from 'react';
import Month from '../Month';
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
        </Month>
    );
}

export default January;