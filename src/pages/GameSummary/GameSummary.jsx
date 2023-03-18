import StyledButton from '@components/StyledButton';
import { useGameCtx } from '@contexts/GameContext';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    PointsInfo,
    ProgressWrapper,
    StyledCircularProgressbarWithChildren,
    StyledJsxInProgressbar,
    Title,
    Trophy,
    TrophyWrapper,
    Wrapper,
} from './GameSummary.styles';
import trophy from '@assets/trophy.svg';
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect } from 'react';

const GameSummary = () => {
    const navigate = useNavigate();
    const { points, userAnswers, quizData } = useGameCtx();
    const [loading, isLoading] = useState(true);

    useEffect(() => {
        isLoading(false);
    }, []);

    const correctAnswers = userAnswers.filter((e) => e === 'correct').length;

    return (
        <Wrapper as={motion.div} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} tranform={{ duration: 0.6 }}>
            <Title>Good Job!</Title>
            <TrophyWrapper>
                {/* <Trophy src={trophy} alt="" draggable={false} /> */}
                <ProgressWrapper>
                    <StyledCircularProgressbarWithChildren
                        value={loading ? 0 : correctAnswers}
                        maxValue={quizData.length}
                        styles={buildStyles({
                            pathTransitionDuration: 1,
                            pathColor: `#ffffff`,
                            textColor: '#f88',
                            trailColor: '#ffc3cf',
                        })}>
                        <StyledJsxInProgressbar>
                            {correctAnswers}
                            <span>{`/${quizData.length}`}</span>
                        </StyledJsxInProgressbar>
                    </StyledCircularProgressbarWithChildren>
                    <p>
                        You answered {correctAnswers} out of {quizData.length} questions
                    </p>
                </ProgressWrapper>
                {/* <PointsInfo>You get +{points} points!</PointsInfo> */}
            </TrophyWrapper>
            {/* <StyledButton onClick={() => navigate('/')} variant="primary">
                Back to Home
            </StyledButton> */}
        </Wrapper>
    );
};

export default GameSummary;
