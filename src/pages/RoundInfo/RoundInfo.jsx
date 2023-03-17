import { useGameCtx } from '@contexts/GameContext';
import formatCategoryName from '@helpers/formatCategoryName';
import getCategoryIcon from '@helpers/getCategoryIcon';
import { motion } from 'framer-motion';
import React from 'react';
import { useEffect } from 'react';
import { Icon, IconWrapper, ProgressDot, ProgressWrapper, Title, Wrapper } from './RoundInfo.styles';
import swordsIcon from '@assets/swords.svg';
import crossIcon from '@assets/cross.svg';
import tickIcon from '@assets/tick.svg';

const RoundInfo = ({ setView }) => {
    const { selectedCategory, currentRound, quizData, userAnswers } = useGameCtx();

    useEffect(() => {
        setTimeout(() => {
            setView('round');
        }, 1000);
    }, []);

    return (
        <Wrapper as={motion.div} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} tranform={{ duration: 0.6 }}>
            <IconWrapper>
                <Icon src={getCategoryIcon(formatCategoryName(selectedCategory.name))} alt="" draggable={false} />
            </IconWrapper>
            <Title>Round {currentRound}</Title>
            <ProgressWrapper>
                {quizData?.map((e, i) => (
                    <ProgressDot
                        key={i}
                        {...(i + 1 === currentRound && { variant: 'current' })}
                        {...(userAnswers[i] === 'correct' && { variant: 'correct' })}
                        {...(userAnswers[i] === 'incorrect' && { variant: 'incorrect' })}>
                        {i + 1 === currentRound && <img src={swordsIcon} alt="" />}
                        {userAnswers[i] === 'correct' && <img src={tickIcon} alt="" />}
                        {userAnswers[i] === 'incorrect' && <img src={crossIcon} alt="" />}
                    </ProgressDot>
                ))}
            </ProgressWrapper>
        </Wrapper>
    );
};

export default RoundInfo;
