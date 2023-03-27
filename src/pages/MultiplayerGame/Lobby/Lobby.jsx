import Loader from '@components/Loader/Loader';
import { useUserAuth } from '@contexts/AuthContext';
import { useMultiplayerCtx } from '@contexts/MultiplayerGameContext';
import shuffleArray from '@helpers/shuffleArray';
import useCopyToClipboard from '@hooks/useCopyToClipboard';
import { database } from '@services/firebase';
import axios from 'axios';
import { get, ref, set, update } from 'firebase/database';
import { AnimatePresence, motion } from 'framer-motion';
import { Copy, CopySuccess, InfoCircle } from 'iconsax-react';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import {
    CopyGameIDButton,
    ShareText,
    GameIDWrapper,
    UsersInLobbyWrapper,
    Wrapper,
    UserAvatar,
    AvatarPlaceholder,
    PlayerWrapper,
    NamePlaceholder,
    Vs,
    StartGameButton,
    Player2Info,
} from './Lobby.styles';

const Lobby = () => {
    const { gameData } = useMultiplayerCtx();
    const { gameID } = useParams();
    const { copyUidToClipboard, copied } = useCopyToClipboard();
    const { user } = useUserAuth();
    const navigate = useNavigate();
    const [loading, isLoading] = useState(true);

    const playerRef = ref(database, `${gameID}/players/${[user.uid]}`);
    const quizDataRef = ref(database, `${gameID}/quizData`);
    const gameRef = ref(database, `${gameID}/game`);

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
        const fetchData = () => {
            axios
                .get(`https://opentdb.com/api.php?amount=5&category=${gameData?.info?.category?.id}&difficulty=easy&type=multiple`)
                .then((response) => {
                    const newQuizData = response.data.results.map((result) => {
                        const answers = mergeAnswers(result.correct_answer, result.incorrect_answers);
                        return {
                            category: result.category,
                            type: result.type,
                            difficulty: result.difficulty,
                            question: result.question,
                            answers: answers,
                        };
                    });
                    set(quizDataRef, newQuizData).catch((error) => console.log(error));
                    set(gameRef, {
                        currentRound: 1,
                        timeLeft: 15,
                    }).catch((error) => console.log(error));
                    isLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        fetchData();
    }, [gameData?.info?.category?.id]);

    useEffect(() => {
        const addPlayerToGame = () => {
            get(ref(database, `${gameID}/players`)).then((snapshot) => {
                let numPlayers = [];
                snapshot.forEach((node) => {
                    numPlayers.push(node.val());
                });
                const alreadyAdded = numPlayers.some((player) => player.uid === user.uid);
                if (!alreadyAdded && numPlayers.length === 2) {
                    toast('Lobby is full', {
                        icon: <InfoCircle />,
                        style: {
                            border: '1px solid #EF8136',
                            padding: '16px',
                            backgroundColor: '#FEF7EC',
                            color: '#EF8136',
                        },
                    });
                    navigate('/');
                } else {
                    set(playerRef, user).catch((error) => {
                        console.log(error);
                    });
                }
            });
        };
        addPlayerToGame();
    }, [gameID]);

    const handleStartGame = () => {
        const updates = {};
        updates[`${gameID}/info/screen`] = 'roundInfo';

        update(ref(database), updates);
    };

    if (!gameData && !loading)
        return (
            <Wrapper>
                <Loader variant="primary" />
            </Wrapper>
        );

    return (
        <Wrapper>
            <ShareText>Share the game code</ShareText>
            <GameIDWrapper>
                <p>{gameID}</p>
                <CopyGameIDButton onClick={() => copyUidToClipboard(gameID)}>
                    {copied ? <CopySuccess color="#6A5AE0" size="16" variant="Outline" /> : <Copy color="#001833" size="16" variant="Outline" />}
                </CopyGameIDButton>
            </GameIDWrapper>
            <UsersInLobbyWrapper>
                <PlayerWrapper>
                    {gameData?.players?.player1 ? (
                        <>
                            <UserAvatar src={gameData.players.player1.photoURL} alt="" draggable={false} />
                            <p>{gameData.players.player1.displayName}</p>{' '}
                        </>
                    ) : (
                        <>
                            <AvatarPlaceholder />
                            <NamePlaceholder>
                                Loading <i>.</i>
                                <i>.</i>
                                <i>.</i>
                            </NamePlaceholder>
                        </>
                    )}
                </PlayerWrapper>
                <Vs>Vs</Vs>
                <PlayerWrapper>
                    {gameData?.players?.player2 ? (
                        <>
                            <UserAvatar src={gameData.players.player2.photoURL} alt="" draggable={false} />
                            <p>{gameData.players.player2.displayName}</p>
                        </>
                    ) : (
                        <>
                            <AvatarPlaceholder />
                            <NamePlaceholder>
                                Waiting for friend <i>.</i>
                                <i>.</i>
                                <i>.</i>
                            </NamePlaceholder>
                        </>
                    )}
                </PlayerWrapper>
            </UsersInLobbyWrapper>
            <AnimatePresence>
                {gameData?.players.player1 &&
                    gameData?.players.player2 &&
                    (gameData?.info.creator === user.uid ? (
                        <StartGameButton
                            onClick={handleStartGame}
                            variant="primary"
                            as={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transformOrigin="top right"
                            transition={{ duration: 0.1 }}>
                            Start Game
                        </StartGameButton>
                    ) : (
                        <Player2Info>Please wait for the creator to start the game</Player2Info>
                    ))}
            </AnimatePresence>
        </Wrapper>
    );
};

export default Lobby;
