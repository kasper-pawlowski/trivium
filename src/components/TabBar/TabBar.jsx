import React from 'react';
import { Avatar, LeftCorner, RightCorner, StyledLink, Wrapper } from './TabBar.styles.js';
import { useUserAuth } from '@contexts/AuthContext';
import { Home2, Notification, Profile2User } from 'iconsax-react';
import { useLocation } from 'react-router-dom';

const TabBar = () => {
    const location = useLocation();
    const { pathname } = location;
    const {
        user: { photoURL, uid },
    } = useUserAuth();

    return (
        <Wrapper>
            <StyledLink to="/">
                <Home2 size="20" color="#fff" variant={pathname === '/' ? 'Bold' : 'Outline'} />
            </StyledLink>
            <StyledLink to="/friends">
                <Profile2User size="20" color="#fff" variant={pathname === '/friends' ? 'Bold' : 'Outline'} />
            </StyledLink>
            <StyledLink to="/notifications">
                <Notification size="20" color="#fff" variant={pathname === '/notifications' ? 'Bold' : 'Outline'} />
            </StyledLink>
            <StyledLink to={`/user/${uid}`}>
                <Avatar src={photoURL} alt="" draggable={false} />
            </StyledLink>
            <LeftCorner />
            <RightCorner />
        </Wrapper>
    );
};

export default TabBar;
