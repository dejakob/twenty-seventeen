import React from 'react';
import Month from '../Month';
import FeedItem from '../FeedItem';
import FacebookPost from '../FacebookPost';

// Add FB post with atob and binary decription
function January(props) {
    return (
        <Month
            title="January"
        >
            <FeedItem>
                <FacebookPost
                    item={props.feed['dejakob/posts/1307694509269299']}
                />
            </FeedItem>
        </Month>
    );
}

export default January;