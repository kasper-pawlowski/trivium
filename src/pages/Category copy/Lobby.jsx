import Loader from '@components/Loader/Loader';
import { useUserAuth } from '@contexts/AuthContext';
import { useGameCtx } from '@contexts/GameContext';
import useCopyToClipboard from '@hooks/useCopyToClipboard';
import { database } from '@services/firebase';
import { child, get, onDisconnect, onValue, push, ref, remove, set, update } from 'firebase/database';
import { AnimatePresence, motion } from 'framer-motion';
import { Copy, CopySuccess, InfoCircle } from 'iconsax-react';
import { useEffect } from 'react';
import { useState } from 'react';
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
    const { gameID } = useParams();
    const { selectedCategory, quizData, setQuizData } = useGameCtx();
    const { copyUidToClipboard, copied } = useCopyToClipboard();
    const { user } = useUserAuth();
    const navigate = useNavigate();

    const playerRef = ref(database, `${gameID}/players/${[user.uid]}`);
    const infoRef = ref(database, `${gameID}/info`);

    useEffect(() => {
        const initGame = () => {
            get(infoRef).then((snapshot) => {
                if (!snapshot.exists()) {
                    set(infoRef, {
                        gameID: gameID,
                        category: selectedCategory,
                        screen: 'lobby',
                        creator: user.uid,
                    })
                        .then(() => {
                            console.log(`Init Game: Succes`);
                        })
                        .catch((error) => {
                            console.log(`Init Game: ${error}`);
                        });
                }
            });
        };

        initGame();
    }, [gameID, selectedCategory]);

    useEffect(() => {
        const addPlayerToGame = () => {
            get(ref(database, `${gameID}/players`)).then((snapshot) => {
                let numPlayers = [];
                snapshot.forEach((node) => {
                    numPlayers.push(node.val());
                });
                if (numPlayers.length === 2) {
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

    useEffect(() => {
        onDisconnect(playerRef).remove();
    }, [gameID]);

    useEffect(() => {
        onValue(ref(database, gameID), (snapshot) => {
            const data = snapshot.val();
            setQuizData({
                info: data?.info,
                players: {
                    player1: data?.players[user.uid],
                    player2: data?.players[Object.keys(data.players).filter((key) => key !== user.uid)[0]],
                },
            });
        });
    }, []);

    useEffect(() => {
        onValue(ref(database, `${gameID}/info/screen`), (snapshot) => {
            const data = snapshot.val();
            if (data === 'game') {
                navigate(`/game/${gameID}`);
            }
        });
    }, []);

    const handleStartGame = () => {
        const updates = {};
        updates[`${gameID}/info/screen`] = 'game';

        update(ref(database), updates);
    };

    useEffect(() => {
        console.log('quizData:', quizData);
    }, [quizData]);

    if (!quizData)
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
                    {quizData?.players?.player1 ? (
                        <>
                            <UserAvatar src={quizData.players.player1.photoURL} alt="" draggable={false} />
                            <p>{quizData.players.player1.displayName}</p>{' '}
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
                    {quizData?.players?.player2 ? (
                        <>
                            <UserAvatar src={quizData.players.player2.photoURL} alt="" draggable={false} />
                            <p>{quizData.players.player2.displayName}</p>
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
                {quizData?.players.player1 &&
                    quizData?.players.player2 &&
                    (quizData?.info.creator === user.uid ? (
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
