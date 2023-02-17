import React from 'react';
import { Avatar, LeftCorner, RightCorner, StyledLink, UserContainer, Wrapper } from './Navbar.styles';
import TriviumLogo from '@assets/triviumLogo.svg';
import { useUserAuth } from '@contexts/AuthContext';
import { useMediaQuery } from 'react-responsive';
import NavbarDropdown from '@components/NavbarDropdown/NavbarDropdown';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const navigate = useNavigate();
    const { user } = useUserAuth();

    return (
        <Wrapper>
            <StyledLink to="/">
                <img src={TriviumLogo} alt="" draggable={false} />
            </StyledLink>
            {!isMobile && (
                <UserContainer>
                    <Avatar onClick={() => navigate('/profile')} src={user.photoURL} alt="" draggable={false} />
                    <NavbarDropdown user={user} />
                </UserContainer>
            )}
            <LeftCorner />
            <RightCorner />
        </Wrapper>
    );
};

export default Navbar;
