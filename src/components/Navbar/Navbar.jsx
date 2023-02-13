import React from 'react';
import { Avatar, Caret, StyledLink, UserContainer, Wrapper } from './Navbar.styles';
import TriviumLogo from '@assets/triviumLogo.svg';
import { useUserAuth } from '@contexts/AuthContext';

const Navbar = () => {
    const {
        user: { photoURL },
    } = useUserAuth();

    return (
        <Wrapper>
            <StyledLink to="/">
                <img src={TriviumLogo} alt="" draggable={false} />
            </StyledLink>
            <UserContainer>
                <Avatar src={photoURL} alt="" draggable={false} />
                <Caret />
            </UserContainer>
        </Wrapper>
    );
};

export default Navbar;
