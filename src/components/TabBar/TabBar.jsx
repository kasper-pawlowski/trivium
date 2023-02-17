import React from 'react';
import { LeftCorner, RightCorner, Wrapper } from './TabBar.styles.js';
import { useUserAuth } from '@contexts/AuthContext';

const TabBar = () => {
    const {
        user: { photoURL },
    } = useUserAuth();

    return (
        <Wrapper>
            <LeftCorner />
            <RightCorner />
        </Wrapper>
    );
};

export default TabBar;
