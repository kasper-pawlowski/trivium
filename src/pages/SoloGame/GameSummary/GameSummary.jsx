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
import { buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect } from 'react';
import { useUserAuth } from '@contexts/AuthContext';
import { db } from '@services/firebase';
import { doc, increment, updateDoc } from 'firebase/firestore';

const GameSummary = () => {
    const navigate = useNavigate();
    const { points, userAnswers, quizData } = useGameCtx();
    const { user } = useUserAuth();
    const [loading, isLoading] = useState(true);

    useEffect(() => {
        const addPoints = async () => {
            await updateDoc(doc(db, 'users', user.googleUid), {
                points: increment(points),
            });
        };
        if (points > 0) {
            addPoints().then(() => {
                isLoading(false);
            });
        }
    }, []);

    const correctAnswers = userAnswers.filter((e) => e === 'correct').length;

    return (
        <Wrapper as={motion.div} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} tranform={{ duration: 0.6 }}>
            <Title>{correctAnswers >= 3 ? 'Good Job!' : 'Could Be Better'}</Title>
            <PointsInfo>You get +{points} points!</PointsInfo>
            <TrophyWrapper>
                {/* <Trophy src={trophy} alt="" draggable={false} /> */}
                <ProgressWrapper>
                    <StyledCircularProgressbarWithChildren
                        value={loading ? 0 : correctAnswers}
                        maxValue={quizData.length}
                        styles={buildStyles({
                            pathTransitionDuration: 1,
                            pathColor: `#001833`,
                            textColor: '#001833',
                            trailColor: '#e4e3f1',
                        })}>
                        <StyledJsxInProgressbar>
                            {correctAnswers}
                            <span>{`/${quizData.length}`}</span>
                        </StyledJsxInProgressbar>
                    </StyledCircularProgressbarWithChildren>
                    <p>
                        You answered {correctAnswers} <br /> out of {quizData.length} <br /> questions
                    </p>
                </ProgressWrapper>
            </TrophyWrapper>
            <StyledButton onClick={() => navigate('/')} variant="primary">
                Back to Home
            </StyledButton>
        </Wrapper>
    );
};

export default GameSummary;
