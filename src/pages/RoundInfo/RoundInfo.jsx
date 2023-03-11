import { useGameCtx } from '@contexts/GameContext';
import formatCategoryName from '@helpers/formatCategoryName';
import getCategoryIcon from '@helpers/getCategoryIcon';
import React from 'react';
import { useEffect } from 'react';
import { Icon, IconWrapper, Title, Wrapper } from './RoundInfo.styles';

const RoundInfo = ({ setView }) => {
    const { selectedCategory, currentRound } = useGameCtx();

    useEffect(() => {
        setTimeout(() => {
            setView('round');
        }, 1000);
    }, []);

    return (
        <Wrapper>
            <IconWrapper>
                <Icon src={getCategoryIcon(formatCategoryName(selectedCategory.name))} alt="" draggable={false} />
            </IconWrapper>
            <Title>Round {currentRound}</Title>
        </Wrapper>
    );
};

export default RoundInfo;
