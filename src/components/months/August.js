import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../Button';
import Month from '../Month';
import FeedItem from '../FeedItem';
import FacebookPost from '../FacebookPost';
import FacebookPostWithExplanation from '../FacebookPostWithExplanation';

function August(props) {
    return (
        <Month
            title="August"
        >
            <FeedItem>
                <GeoowEvents />
            </FeedItem>    
        </Month>
    );
}

const Center = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    flex-wrap: wrap;

    + div {
        margin-top: 16px;
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
    margin-top: 32px;
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
                <Center>
                    <a href="http://geoow.com" target="_blank">
                        <img src="/assets/logo@2x.png" alt="Geoow logo" height="200" />
                    </a>    
                </Center>
                <Center>
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
                </Center>
                <GeoowEventListWrapper>
                    <WideGeoowEventList>
                        {Object.keys(this.state.events).map(event =>
                            <a
                                href={`http://facebook.com/${this.state.events[event].originalEventData.id}`}
                                target="_blank"
                            >
                                <GeoowEvent>
                                    <figure>
                                        <img
                                            src={this.state.events[event].cover.source}
                                            alt={this.state.events[event].name}
                                            width={300}
                                        />
                                        <figcaption>
                                            <h3>
                                                {this.state.events[event].name}
                                            </h3>
                                            <p>
                                                {this.state.events[event].description.substr(0, 300)}...
                                            </p>
                                        </figcaption>
                                    </figure>
                                </GeoowEvent>
                            </a>
                        )}
                    </WideGeoowEventList>
                </GeoowEventListWrapper>
            </GeoowSection>
        );
    }
}

export default August;