import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Button, ButtonsContainer, LeftContainer, Message, RightContainer, Time, Wrapper } from './NotificationItem.styles';

const NotificationItem = ({ notification }) => {
    dayjs.extend(relativeTime);
    const { timestamp, sender } = notification;

    console.log(sender);

    return (
        <Wrapper>
            <LeftContainer>
                <Avatar src={sender.photoURL} alt="" draggable={false} />
            </LeftContainer>
            <RightContainer>
                <Message>
                    <Link to={`/user/${sender.uid}`}>{sender.displayName}</Link> wants to be friends!
                </Message>
                <Time>{`${dayjs(timestamp.toDate()).fromNow(true)} ago`}</Time>
                <ButtonsContainer>
                    <Button variant="third">Decline</Button>
                    <Button variant="primary">Accept</Button>
                </ButtonsContainer>
            </RightContainer>
        </Wrapper>
    );
};

export default NotificationItem;
