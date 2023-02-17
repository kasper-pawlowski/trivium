import React from 'react';
import { LeftCorner, RightCorner, Wrapper } from './TabBar.styles.js';
import { useUserAuth } from '@contexts/AuthContext';
import cornerLeft from '@assets/cornerLeft.svg';
import cornerRight from '@assets/cornerRight.svg';

const TabBar = () => {
    const {
        user: { photoURL },
    } = useUserAuth();

    return (
        <Wrapper>
            <LeftCorner src={cornerLeft} alt="" draggable={false} />
            <RightCorner src={cornerRight} alt="" draggable={false} />
        </Wrapper>
    );
};

export default TabBar;
