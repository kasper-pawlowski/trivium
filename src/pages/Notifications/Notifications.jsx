import NotificationItem from '@components/NotificationItem/NotificationItem';
import { useGameCtx } from '@contexts/GameContext';
import React, { useEffect } from 'react';
import { Title, Wrapper } from './Notifications.styles';

const Notifications = () => {
    const { setHasUnreadNotifications, notifications } = useGameCtx();

    useEffect(() => {
        setHasUnreadNotifications(false);
    }, []);

    return (
        <Wrapper>
            <Title>Notifications: </Title>
            {notifications.length ? (
                notifications.map((notification) => <NotificationItem key={notification.id} notification={notification} />)
            ) : (
                <p>no notifications</p>
            )}
        </Wrapper>
    );
};

export default Notifications;
