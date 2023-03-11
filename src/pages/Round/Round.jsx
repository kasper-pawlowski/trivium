import { useGameCtx } from '@contexts/GameContext';
import React, { useEffect, useState } from 'react';
import { Answer, AnswersWrapper, Question, Wrapper } from './Round.styles';

const Round = () => {
    const [answers, setAnswers] = useState(null);
    const { quizData } = useGameCtx();

    return (
        <Wrapper>
            <Question>{quizData[0].question}</Question>
            <AnswersWrapper>
                {quizData[0].answers.map((answer) => (
                    <Answer key={answer.answer} isCorrect={answer.isCorrect}>
                        {answer.answer}
                    </Answer>
                ))}
            </AnswersWrapper>
        </Wrapper>
    );
};

export default Round;
