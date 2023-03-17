import { useGameCtx } from '@contexts/GameContext';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import { TimerBackground, TimerFill, TimerText, Wrapper } from './Timer.styles';

const Timer = ({ duration, isTimeUp, handleNextRound, clicked }) => {
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
            isTimeUp(true);
            setUserAnswers((previusAnswers) => [...previusAnswers, 'incorrect']);
            handleNextRound();
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

export default Timer;
