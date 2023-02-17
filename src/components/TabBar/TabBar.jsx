import React from 'react';
import { LeftCorner, Wrapper } from './TabBar.styles.js';
import { useUserAuth } from '@contexts/AuthContext';
import cornerLeft from '@assets/cornerLeft.svg';

const TabBar = () => {
    const {
        user: { photoURL },
    } = useUserAuth();

    return (
        <Wrapper>
            <LeftCorner src={cornerLeft} alt="" draggable={false} />
        </Wrapper>
    );
};

export default TabBar;
