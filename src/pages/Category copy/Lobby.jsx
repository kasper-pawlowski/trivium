import { useUserAuth } from '@contexts/AuthContext';
import { useGameCtx } from '@contexts/GameContext';
import useCopyToClipboard from '@hooks/useCopyToClipboard';
import { database } from '@services/firebase';
import { child, get, onDisconnect, onValue, push, ref, remove, set, update } from 'firebase/database';
import { Copy, CopySuccess } from 'iconsax-react';
import { useEffect } from 'react';
import { useState } from 'react';
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
    const [loading, isLoading] = useState(true);
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
                        status: 'init',
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
            set(playerRef, user)
                .then(() => {
                    console.log(`addPlayerToGame: Succes`);
                })
                .catch((error) => {
                    console.log(`addPlayerToGame: ${error}`);
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

    const handleStartGame = () => {
        const newPostKey = push(child(ref(database), 'status')).key;

        const updates = {};
        updates[`${gameID}/info/status`] = 'game';

        update(ref(database), updates).then(() => {
            navigate(`/game/${gameID}`);
        });
    };

    useEffect(() => {
        console.log('quizData:', quizData);
    }, [quizData]);

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
            {quizData?.players.player1 &&
                quizData?.players.player2 &&
                (quizData?.info.creator === user.uid ? (
                    <StartGameButton onClick={handleStartGame} variant="primary">
                        Start Game
                    </StartGameButton>
                ) : (
                    <Player2Info>Please wait for the creator to start the game</Player2Info>
                ))}
        </Wrapper>
    );
};

export default Lobby;
