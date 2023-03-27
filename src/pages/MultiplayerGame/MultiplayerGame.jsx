import Loader from '@components/Loader/Loader';
import { useUserAuth } from '@contexts/AuthContext';
import { useGameCtx } from '@contexts/GameContext';
import { useMultiplayerCtx } from '@contexts/MultiplayerGameContext';
import { database } from '@services/firebase';
import { get, onDisconnect, onValue, push, ref, remove, set, update } from 'firebase/database';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Lobby from './Lobby/Lobby';
import { Wrapper } from './MultiplayerGame.styles';
import Round from './Round/Round';
import RoundInfo from './RoundInfo/RoundInfo';

const MultiplayerGame = () => {
    const { gameID } = useParams();
    const { selectedCategory } = useGameCtx();
    const { user } = useUserAuth();
    const { gameData, setGameData, screen, setScreen } = useMultiplayerCtx();

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
        onDisconnect(playerRef).remove();
    }, [gameID]);

    useEffect(() => {
        onValue(ref(database, gameID), (snapshot) => {
            const data = snapshot.val();
            setGameData({
                info: data?.info,
                players: {
                    player1: data?.players[user?.uid],
                    player2: data?.players[Object.keys(data?.players).filter((key) => key !== user?.uid)[0]],
                },
                quizData: data?.quizData,
                game: {
                    currentRound: data?.game?.currentRound,
                    playersAnswers: {
                        player1: data?.game?.playersAnswers?.[user?.uid],
                        player2: data?.game?.playersAnswers?.[Object.keys(data?.players).filter((key) => key !== user?.uid)[0]],
                    },
                    timeLeft: data?.game?.timeLeft,
                },
            });
        });
    }, []);

    useEffect(() => {
        onValue(ref(database, `${gameID}/info/screen`), (snapshot) => {
            const data = snapshot.val();
            setScreen(data);
        });
    }, []);

    // useEffect(() => {
    //     console.log('gameData:', gameData);
    // }, [gameData]);

    // useEffect(() => {
    //     console.log('screen:', screen);
    // }, [screen]);

    switch (screen) {
        case 'lobby':
            return <Lobby />;
        case 'roundInfo':
            return <RoundInfo />;
        case 'round':
            return <Round />;
        default:
            return (
                <Wrapper>
                    <Loader variant="primary" />
                </Wrapper>
            );
    }
};

export default MultiplayerGame;
