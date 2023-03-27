import { useGameCtx } from '@contexts/GameContext';
import { useMultiplayerCtx } from '@contexts/MultiplayerGameContext';
import { database } from '@services/firebase';
import { ref, set } from 'firebase/database';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TimerBackground, TimerFill, TimerText, Wrapper } from './Timer.styles';

export const MultiplayerTimer = ({ duration, clicked }) => {
    const { gameData } = useMultiplayerCtx();
    const { gameID } = useParams();
    let intervalId = null;

    useEffect(() => {
        if (gameData?.game?.timeLeft > 0) {
            intervalId = setInterval(() => {
                const timeLeftRef = ref(database, `${gameID}/game/timeLeft`);
                set(timeLeftRef, gameData?.game?.timeLeft - 1).catch((error) => console.log(error));
            }, 1000);
        } else {
            clearInterval(intervalId);
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [gameData?.game?.timeLeft]);

    return (
        <Wrapper>
            <TimerBackground />
            <TimerFill duration={duration} />
            <AnimatePresence>
                {!clicked && (
                    <TimerText
                        as={motion.div}
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        transition={{ duration: 0.2 }}>
                        {gameData && gameData?.game?.timeLeft}
                    </TimerText>
                )}
            </AnimatePresence>
        </Wrapper>
    );
};

export const SoloTimer = ({ duration, isTimeUp, handleNextRound, clicked }) => {
    const [secondsLeft, setSecondsLeft] = useState(duration);
    const { setUserAnswers } = useGameCtx();
    let intervalId = null;

    useEffect(() => {
        if (secondsLeft > 0) {
            intervalId = setInterval(() => {
                setSecondsLeft((seconds) => seconds - 1);
            }, 1000);
        } else {
            clearInterval(intervalId);
            if (!clicked) {
                isTimeUp(true);
                setUserAnswers((previusAnswers) => [...previusAnswers, 'incorrect']);
                handleNextRound();
            }
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [secondsLeft]);

    return (
        <Wrapper>
            <TimerBackground />
            <TimerFill clicked={clicked} duration={duration} />
            <AnimatePresence>
                {!clicked && (
                    <TimerText
                        as={motion.div}
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        transition={{ duration: 0.2 }}>
                        {secondsLeft}
                    </TimerText>
                )}
            </AnimatePresence>
        </Wrapper>
    );
};
