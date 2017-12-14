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
            <FeedItem>
                <FacebookPost
                    item={props.feed.facebook['dejakob/posts/1309292115776205']}
                />
            </FeedItem>
            <FeedItem>
                <FacebookPost
                    item={props.feed.facebook['dejakob/posts/1316091521762931']}
                />
            </FeedItem>
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

export default January;