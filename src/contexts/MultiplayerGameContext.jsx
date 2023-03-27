import { createContext, useContext, useState } from 'react';

const multiplayerGameContext = createContext();

const initialState = {
    gameData: null,
    screen: null,
};

export function MultiplayerGameContextProvider({ children }) {
    const [gameData, setGameData] = useState(initialState.gameData);
    const [screen, setScreen] = useState(initialState.screen);

    const resetContext = () => {
        setGameData(initialState.gameData);
        setScreen(initialState.screen);
    };

    return (
        <multiplayerGameContext.Provider
            value={{
                resetContext,
                gameData,
                setGameData,
                screen,
                setScreen,
            }}>
            {children}
        </multiplayerGameContext.Provider>
    );
}

export function useMultiplayerCtx() {
    return useContext(multiplayerGameContext);
}
