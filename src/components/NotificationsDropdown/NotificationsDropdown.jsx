import NotificationItem from '@components/NotificationItem/NotificationItem';
import { useUserAuth } from '@contexts/AuthContext';
import { useGameCtx } from '@contexts/GameContext';
import useOnClickOutside from '@hooks/useOnClickOutside';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dropdown, NotificationsNumber, StyledNotificationIcon, Title, Wrapper } from './NotificationsDropdown.styles';

const NotificationsDropdown = () => {
    const { setHasUnreadNotifications, notifications, hasUnreadNotifications } = useGameCtx();
    const { ref, isComponentVisible, setIsComponentVisible } = useOnClickOutside(false);

    useEffect(() => {
        if (hasUnreadNotifications) {
            setHasUnreadNotifications(false);
        }
    }, [isComponentVisible]);

    return (
        <Wrapper>
            <div className="drop">
                <StyledNotificationIcon onClick={() => setIsComponentVisible(true)} size="20" variant="Bold" />
                {hasUnreadNotifications && <NotificationsNumber>{notifications.length}</NotificationsNumber>}
            </div>
            <AnimatePresence>
                {isComponentVisible && (
                    <Dropdown
                        ref={ref}
                        as={motion.div}
                        initial={{ opacity: 0, scale: 0.6, y: -50, x: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, scale: 0.6, y: -50, x: 50 }}
                        transformOrigin="top right"
                        transition={{ duration: 0.2 }}>
                        <Title>Notifications</Title>
                        {notifications.length ? (
                            notifications.map((notification) => (
                                <NotificationItem key={notification.id} notification={notification} setIsComponentVisible={setIsComponentVisible} />
                            ))
                        ) : (
                            <p>no notifications</p>
                        )}
                    </Dropdown>
                )}
            </AnimatePresence>
        </Wrapper>
    );
};

export default NotificationsDropdown;
