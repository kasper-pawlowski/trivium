import React from 'react';
import { Avatar, LeftCorner, RightCorner, Seperator, StyledLink, UserContainer, Wrapper } from './Navbar.styles';
import TriviumLogo from '@assets/triviumLogo.svg';
import { useUserAuth } from '@contexts/AuthContext';
import { useMediaQuery } from 'react-responsive';
import NavbarDropdown from '@components/NavbarDropdown/NavbarDropdown';
import { useLocation, useNavigate } from 'react-router-dom';
import Search from '@components/Search/Search';
import NotificationsDropdown from '@components/NotificationsDropdown/NotificationsDropdown';

const Navbar = ({ searchValue, setSearchValue }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useUserAuth();

    return (
        <Wrapper>
            <StyledLink to="/">
                <img src={TriviumLogo} alt="" draggable={false} />
            </StyledLink>
            {location.pathname === '/' && <Search searchValue={searchValue} setSearchValue={setSearchValue} />}
            {!isMobile && (
                <UserContainer>
                    <NotificationsDropdown />
                    <Seperator />
                    <Avatar onClick={() => navigate(`/user/${user.uid}`)} src={user.photoURL} alt="" draggable={false} referrerPolicy="no-referrer" />
                    <NavbarDropdown />
                </UserContainer>
            )}
            <LeftCorner />
            <RightCorner />
        </Wrapper>
    );
};

export default Navbar;
