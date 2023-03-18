import { useGameCtx } from '@contexts/GameContext';
import fetcher from '@helpers/fetcher';
import React, { useEffect, useState } from 'react';
import { TopContainer, Wrapper } from './Game.styles';
import useSWR from 'swr';
import Loader from '@components/Loader/Loader';
import { useNavigate } from 'react-router-dom';
import Round from '@pages/Round/Round';
import RoundInfo from '@pages/RoundInfo/RoundInfo';
import shuffleArray from '@helpers/shuffleArray';
import GameSummary from '@pages/GameSummary/GameSummary';
import { useUserAuth } from '@contexts/AuthContext';
import UserQuizProgress from '@components/UserQuizProgress/UserQuizProgress';

const Game = () => {
    const navigate = useNavigate();
    const { selectedCategory, setCurrentRound, setQuizData, userAnswers, currentRound, quizData, resetQuizData } = useGameCtx();
    const [view, setView] = useState('info');

    useEffect(() => {
        resetQuizData();
    }, []);

    const { data, error, isLoading } = useSWR(
        `https://opentdb.com/api.php?amount=5&category=${selectedCategory?.id}&difficulty=easy&type=multiple`,
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        }
    );

    useEffect(() => {
        if (!selectedCategory) {
            navigate('/');
        }
    }, [selectedCategory]);

    const mergeAnswers = (correctAnswer, incorrectAnswers) => {
        const answers = Object.values(incorrectAnswers)
            .concat(correctAnswer)
            .map((answer) => {
                return { answer: answer, isCorrect: answer === correctAnswer };
            });
        const shuffledAnswers = shuffleArray(answers);
        return shuffledAnswers;
    };

    useEffect(() => {
        if (data?.results) {
            const quizData = data.results.map((result) => {
                const answers = mergeAnswers(result.correct_answer, result.incorrect_answers);
                return {
                    category: result.category,
                    type: result.type,
                    difficulty: result.difficulty,
                    question: result.question,
                    answers: answers,
                };
            });
            setQuizData(quizData);
        }
        setCurrentRound(1);
    }, [data]);

    if (error) return <div>failed to load</div>;
    if (isLoading)
        return (
            <Wrapper>
                <Loader variant="primary" />
            </Wrapper>
        );
    return (
        <Wrapper>
            {(view === 'info' || view === 'round') && (
                <TopContainer>
                    <UserQuizProgress />
                </TopContainer>
            )}
            {view === 'info' && <RoundInfo setView={setView} />}
            {view === 'round' && <Round setView={setView} />}
            {view === 'summary' && <GameSummary setView={setView} />}
        </Wrapper>
    );
};

export default Game;
