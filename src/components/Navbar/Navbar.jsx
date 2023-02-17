import React from 'react';
import { Avatar, StyledArrowDown2, StyledLink, UserContainer, Wrapper } from './Navbar.styles';
import TriviumLogo from '@assets/triviumLogo.svg';
import { useUserAuth } from '@contexts/AuthContext';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const {
        user: { photoURL },
    } = useUserAuth();

    return (
        <Wrapper>
            <StyledLink to="/">
                <img src={TriviumLogo} alt="" draggable={false} />
            </StyledLink>
            {!isMobile && (
                <UserContainer>
                    <Avatar src={photoURL} alt="" draggable={false} />
                    <StyledArrowDown2 size="20" variant="Bold" />
                </UserContainer>
            )}
        </Wrapper>
    );
};

export default Navbar;
