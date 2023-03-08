import { db } from '@services/firebase';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { addDoc, collection, deleteDoc, doc, setDoc } from 'firebase/firestore';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Button, ButtonsContainer, LeftContainer, Message, RightContainer, Time, Wrapper } from './NotificationItem.styles';

const NotificationItem = ({ notification, setIsComponentVisible }) => {
    dayjs.extend(relativeTime);
    const { timestamp, sender, receiver } = notification;
    const navigate = useNavigate();

    const handleAccept = async () => {
        await setDoc(doc(db, 'users', sender.googleUid, 'friends', `${sender.uid}${receiver.uid}`), {
            displayName: receiver.displayName,
            photoURL: receiver.photoURL,
            uid: receiver.uid,
            googleUid: receiver.googleUid,
        });
        await setDoc(doc(db, 'users', receiver.googleUid, 'friends', `${receiver.uid}${sender.uid}`), {
            displayName: sender.displayName,
            photoURL: sender.photoURL,
            uid: sender.uid,
            googleUid: sender.googleUid,
        });
        await deleteDoc(doc(db, 'invitations', notification.id));
    };

    const handleDecline = async () => {
        await deleteDoc(doc(db, 'invitations', notification.id));
    };

    return (
        <Wrapper>
            <LeftContainer>
                <Avatar
                    onClick={() => (setIsComponentVisible(false), navigate(`/user/${sender.uid}`))}
                    src={sender.photoURL}
                    alt=""
                    draggable={false}
                />
            </LeftContainer>
            <RightContainer>
                <Message>
                    <span onClick={() => (setIsComponentVisible(false), navigate(`/user/${sender.uid}`))}>{sender.displayName}</span> wants to be
                    friends!
                </Message>
                <Time>{`${dayjs(timestamp.toDate()).fromNow(true)} ago`}</Time>
                <ButtonsContainer>
                    <Button onClick={handleAccept} variant="primary">
                        Accept
                    </Button>
                    <Button onClick={handleDecline} variant="third">
                        Decline
                    </Button>
                </ButtonsContainer>
            </RightContainer>
        </Wrapper>
    );
};

export default NotificationItem;
