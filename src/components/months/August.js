import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../Button';
import Divider from '../Divider';
import ImageDivider from '../ImageDivider';
import Month from '../Month';
import FeedItem from '../FeedItem';
import FacebookPost from '../FacebookPost';
import FacebookPostWithExplanation from '../FacebookPostWithExplanation';

const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;
const SlideToCenter = styled(Center)`
    transform: translate(-100%);
    transition: transform 2s;

    .visible & {
        transform: translate(0);
    }
`;

function August(props) {
    return (
        <Month
            title="August"
        >
            <Divider />
            <FeedItem>
                <GeoowEvents />
            </FeedItem>  
            <Divider />
            <FeedItem>
                <FacebookPostWithExplanation
                    item={props.feed.facebook['photo.php?fbid=1538048176233930&set=a.452807001424725.98241.100000862866272&type=3&theater']}
                    explanation={`
                        An end has a start I guess
                    `}
                ></FacebookPostWithExplanation>
            </FeedItem>
            <Divider />
            <FeedItem>
                <SlideToCenter>
                    <img src={`${process.env.PUBLIC_URL}/assets/icons8-steam_engine.png`} />
                </SlideToCenter>
            </FeedItem>
            <Divider />
            <ImageDivider
                imageSource={`${process.env.PUBLIC_URL}/assets/amsterdam.jpg`}
            />
        </Month>
    );
}

const GCenter = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    flex-wrap: wrap;

    + div {
        margin-top: 48px;
    }
`;
const GeoowSection = styled.section`
    background: none;
    color: #ffffff;
    padding: 64px 0;
    width: 100%;
    transition: background 1s;

    .visible & {
        background-color: rgb(41,57,79);
    }
`;
const GeoowLink = styled.a`
    display: inline-flex;
    align-items: center;
    height: 36px;
    border-radius: 18px;
    padding: 0 18px;
    border: 2px #fff solid;
    color: #fff;
    text-decoration: none;
    margin: 8px;
    background: none;
    transition: background 1s;

    &:hover {
        color: rgb(41,57,79);
        background-color: #fff;
    }
`;
const GeoowEventListWrapper = styled.div`
    overflow: auto;
`;
const GeoowEventList = styled.ul`
    display: flex;
    align-items: flex-start;
`;
const GeoowEvent = styled.li`
    display: inline-flex;
    width: 300px;
    margin: 0 16px;
    border-radius: 3px;
    overflow: hidden;
    background-color: #fff;

    h3 {
        color: #333;
        text-align: center;
        padding: 16px;
        text-transform: uppercase;
        line-height: 22px;
        font-size: 14px;
    }
    p {
        color: #999;
        font-weight: 100;
        font-size: 12px;
        padding: 0 16px 16px 16px;
        line-height: 14px;
        text-align: justify;
    }
    img {
        max-height: 300px;
    }
`;
class GeoowEvents extends Component {
    constructor() {
        super();

        this.loadEventsNearby = this.loadEventsNearby.bind(this);
        this.eventsNearbyLoaded = this.eventsNearbyLoaded.bind(this);

        this.state = { events: {} };
    }

    async componentWillMount() {
        navigator.geolocation.getCurrentPosition(position => {
            this.loadEventsNearby(position.coords.latitude, position.coords.longitude);
        }, () => {
            // Amsterdam
            this.loadEventsNearby(52.3751858, 4.8936877);
        });
    }

    loadEventsNearby(lat, lng) {
        window.eventsNearbyLoaded = this.eventsNearbyLoaded;
        var el = document.createElement('script');
        el.setAttribute('src', `//geoow.com/events/nearby?longitude=${lng}&latitude=${lat}&format=jsonp&callback=eventsNearbyLoaded`);
        el.setAttribute('type', 'text/javascript');
        document.body.appendChild(el);
    }

    eventsNearbyLoaded(events) {
        this.setState({ events });
    }

    render() {
        const WideGeoowEventList = styled(GeoowEventList)`
            width: ${Object.keys(this.state.events).length * 300}px
        `;

        return (
            <GeoowSection>
                <GCenter>
                    <a href="http://geoow.com" target="_blank">
                        <img src={`${process.env.PUBLIC_URL}/assets/logo@2x.png`} alt="Geoow logo" height="200" />
                    </a>    
                </GCenter>
                <GCenter>
                    <GeoowLink
                        href="http://itunes.apple.com/be/app/geoow/id1272724454?mt=8"
                        target="_blank"
                    >
                        Download for iOS
                    </GeoowLink>
                    <GeoowLink
                        href="http://play.google.com/store/apps/details?id=com.geoownative"
                        target="_blank"
                    >
                        Download for Android
                    </GeoowLink>
                    <GeoowLink
                        href="http://fb.me/geoow"
                        target="_blank"
                    >
                        Like on FB
                    </GeoowLink>
                    <GeoowLink
                        href="http://m.me/geoow"
                        target="_blank"
                    >
                        Contact
                    </GeoowLink>
                </GCenter>
                <GeoowEventListWrapper>
                    <WideGeoowEventList>
                        {Object.keys(this.state.events).map(e => renderGeoowEvent(this.state.events[e]))}
                    </WideGeoowEventList>
                </GeoowEventListWrapper>
            </GeoowSection>
        );
    }
}
function renderGeoowEvent(event) {
    if (!event) {
        return null;
    }

    const eventLink = event.originalEventData && event.originalEventData.id ? 
        `http://facebook.com/${event.originalEventData.id}`
    : '#';
    const eventImage = event.cover && event.cover.source ?
    (
        <img
            src={event.cover.source}
            alt={event.name}
            width={300}
        />
    ) : null;
    const eventName = event.name ? 
    (
        <h3>
            {event.name}
        </h3>
    ) : null;
    const eventDescription = typeof event.description === 'string' ?
    (
        <p>
            {event.description.substr(0, 300)}...
        </p>
    ) : null;

    return (
        <a
            href={eventLink}
            target="_blank"
        >
            <GeoowEvent>
                <figure>
                    {eventImage}
                    <figcaption>
                        {eventName}
                        {eventDescription}
                    </figcaption>
                </figure>
            </GeoowEvent>
        </a>
    );
}

export default August;