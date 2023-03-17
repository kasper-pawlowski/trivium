import StyledButton from '@components/StyledButton';
import { useGameCtx } from '@contexts/GameContext';
import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from './GameSummary.styles';

const GameSummary = () => {
    const navigate = useNavigate();
    const { points } = useGameCtx();

    return (
        <Wrapper as={motion.div} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} tranform={{ duration: 0.6 }}>
            <h1>You get +{points} points!</h1>
            <StyledButton onClick={() => navigate('/')} variant="primary">
                Back to Home
            </StyledButton>
        </Wrapper>
    );
};

export default GameSummary;
