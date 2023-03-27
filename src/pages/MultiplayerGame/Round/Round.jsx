import { useGameCtx } from '@contexts/GameContext';
import React, { useEffect, useState } from 'react';
import { Answer, AnswerAvatar, AnswersWrapper, Question, Wrapper } from './Round.styles';
import { decode } from 'html-entities';
import { MultiplayerTimer } from '@components/Timer/Timer';
import { motion } from 'framer-motion';
import { useMultiplayerCtx } from '@contexts/MultiplayerGameContext';
import { useParams } from 'react-router-dom';
import { useUserAuth } from '@contexts/AuthContext';
import { increment, push, ref, set, update } from 'firebase/database';
import { database } from '@services/firebase';

const Round = () => {
    const { gameData } = useMultiplayerCtx();
    const { gameID } = useParams();
    const { user } = useUserAuth();
    const [clicked, isClicked] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleNextRound = () => {
        setTimeout(() => {
            if (gameData?.game?.currentRound == gameData?.quizData?.length) {
                console.log('full');
                // const screenRef = ref(database, `${gameID}/info/screen`);
                // set(screenRef, 'summary').catch((error) => console.log(error));
            } else {
                const currentRoundRef = ref(database, `${gameID}/game`);
                update(currentRoundRef, {
                    currentRound: gameData?.game?.currentRound + 1,
                }).catch((error) => console.log(error));
                const screenRef = ref(database, `${gameID}/info/screen`);
                set(screenRef, 'roundInfo').catch((error) => console.log(error));
            }
        }, 2000);
    };

    const handleAnswer = async ({ isCorrect, answer }) => {
        isClicked(true);
        setSelectedAnswer(answer);
        const playerAnswersRef = ref(database, `${gameID}/game/playersAnswers/${user.uid}`);
        await update(playerAnswersRef, {
            [gameData.game.currentRound - 1]: {
                answer,
                isCorrect,
            },
        }).catch((error) => console.log(error));
        // handleNextRound();
    };

    useEffect(() => {
        if (gameData?.game?.currentRound) {
            const player1Answers = gameData?.game?.playersAnswers?.player1;
            const player2Answers = gameData?.game?.playersAnswers?.player2;

            if (
                player1Answers &&
                player2Answers &&
                player1Answers[gameData?.game?.currentRound - 1] &&
                player2Answers[gameData?.game?.currentRound - 1]
            ) {
                console.log(player1Answers[gameData?.game?.currentRound - 1]);
                console.log(player2Answers[gameData?.game?.currentRound - 1]);
                handleNextRound();
            } else {
                console.log('2');
            }
        } else {
            console.log('1');
        }
    }, [gameData?.game?.playersAnswers?.player1, gameData?.game?.playersAnswers?.player2]);

    return (
        <Wrapper as={motion.div} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} tranform={{ duration: 0.6 }}>
            <MultiplayerTimer duration={15} clicked={clicked} />
            <Question>{decode(gameData?.quizData[gameData?.game?.currentRound - 1]?.question)}</Question>
            <AnswersWrapper>
                {gameData?.quizData[gameData?.game?.currentRound - 1].answers?.map((answer) => (
                    <Answer
                        key={answer.answer}
                        isCorrect={answer.isCorrect}
                        answer={answer.answer}
                        clicked={clicked}
                        selectedAnswer={selectedAnswer}
                        // timeUp={timeUp}
                        // disabled={clicked || timeUp ? true : false}
                        onClick={() => handleAnswer(answer)}>
                        <>
                            {decode(answer.answer)}
                            {clicked && answer.answer == selectedAnswer && (
                                <AnswerAvatar
                                    player="player1"
                                    src={user.photoURL}
                                    draggable={false}
                                    alt=""
                                    as={motion.img}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    tranform={{ duration: 0.6 }}
                                />
                            )}
                            {clicked &&
                                gameData?.game?.playersAnswers?.player2 &&
                                gameData?.game?.playersAnswers?.player2[gameData?.game?.currentRound - 1]?.answer === answer.answer && (
                                    <AnswerAvatar
                                        player="player2"
                                        src={gameData?.players?.player2?.photoURL}
                                        draggable={false}
                                        alt=""
                                        as={motion.img}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        tranform={{ duration: 0.6 }}
                                    />
                                )}
                        </>
                    </Answer>
                ))}
            </AnswersWrapper>
        </Wrapper>
    );
};

export default Round;
