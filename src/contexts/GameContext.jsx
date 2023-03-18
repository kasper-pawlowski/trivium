import { createContext, useContext, useState } from 'react';

const gameContext = createContext();

const initialState = {
    selectedCategory: null,
    notifications: [],
    hasUnreadNotifications: null,
    currentRound: null,
    quizData: null,
    points: 0,
    userAnswers: [],
};

export function GameContextProvider({ children }) {
    const [selectedCategory, setSelectedCategory] = useState(initialState.selectedCategory);
    const [notifications, setNotifications] = useState(initialState.notifications);
    const [hasUnreadNotifications, setHasUnreadNotifications] = useState(initialState.hasUnreadNotifications);
    const [currentRound, setCurrentRound] = useState(initialState.currentRound);
    const [quizData, setQuizData] = useState(initialState.quizData);
    const [points, setPoints] = useState(initialState.points);
    const [userAnswers, setUserAnswers] = useState(initialState.userAnswers);

    const resetQuizData = () => {
        setCurrentRound(initialState.currentRound);
        setQuizData(initialState.quizData);
        setPoints(initialState.points);
        setUserAnswers(initialState.userAnswers);
    };

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
                points,
                setPoints,
                userAnswers,
                setUserAnswers,
                resetQuizData,
            }}>
            {children}
        </gameContext.Provider>
    );
}

export function useGameCtx() {
    return useContext(gameContext);
}
