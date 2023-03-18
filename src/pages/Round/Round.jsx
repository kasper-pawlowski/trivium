import { useGameCtx } from '@contexts/GameContext';
import React, { useEffect, useState } from 'react';
import { Answer, AnswersWrapper, Question, Wrapper } from './Round.styles';
import { decode } from 'html-entities';
import Timer from '@components/Timer/Timer';
import { motion } from 'framer-motion';

const Round = ({ setView }) => {
    const { quizData, currentRound, setCurrentRound, setPoints, setUserAnswers } = useGameCtx();
    const [clicked, isClicked] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [timeUp, isTimeUp] = useState(false);

    const handleNextRound = () => {
        setTimeout(() => {
            if (currentRound == quizData.length) {
                setView('summary');
            } else {
                setCurrentRound((currentRound) => currentRound + 1);
                setView('info');
            }
        }, 2000);
    };

    const handleAnswer = ({ isCorrect, answer }) => {
        isClicked(true);
        setSelectedAnswer(answer);
        if (isCorrect) {
            setPoints((points) => points + 10);
            setUserAnswers((previusAnswers) => [...previusAnswers, 'correct']);
        }
        if (!isCorrect) {
            setUserAnswers((previusAnswers) => [...previusAnswers, 'incorrect']);
        }
        handleNextRound();
    };

    return (
        <Wrapper as={motion.div} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} tranform={{ duration: 0.6 }}>
            <Timer duration={15} isTimeUp={isTimeUp} handleNextRound={handleNextRound} clicked={clicked} />
            <Question>{decode(quizData[currentRound - 1].question)}</Question>
            <AnswersWrapper>
                {quizData[currentRound - 1].answers.map((answer) => (
                    <Answer
                        key={answer.answer}
                        isCorrect={answer.isCorrect}
                        clicked={clicked}
                        selectedAnswer={selectedAnswer}
                        answer={answer.answer}
                        timeUp={timeUp}
                        disabled={clicked || timeUp ? true : false}
                        onClick={() => handleAnswer(answer)}>
                        {decode(answer.answer)}
                    </Answer>
                ))}
            </AnswersWrapper>
        </Wrapper>
    );
};

export default Round;
