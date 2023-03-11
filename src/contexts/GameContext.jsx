import { createContext, useContext, useState } from 'react';

const gameContext = createContext();

const initialState = {};

export function GameContextProvider({ children }) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [notifications, setNotifications] = useState([]);
    const [hasUnreadNotifications, setHasUnreadNotifications] = useState(null);
    const [currentRound, setCurrentRound] = useState(null);
    const [quizData, setQuizData] = useState(null);

    return (
        <gameContext.Provider
            value={{
                selectedCategory,
                setSelectedCategory,
                notifications,
                setNotifications,
                hasUnreadNotifications,
                setHasUnreadNotifications,
                currentRound,
                setCurrentRound,
                quizData,
                setQuizData,
            }}>
            {children}
        </gameContext.Provider>
    );
}

export function useGameCtx() {
    return useContext(gameContext);
}
