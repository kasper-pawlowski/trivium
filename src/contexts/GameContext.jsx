import { createContext, useContext, useState } from 'react';

const gameContext = createContext();

const initialState = {};

export function GameContextProvider({ children }) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [notifications, setNotifications] = useState([]);

    return (
        <gameContext.Provider
            value={{
                selectedCategory,
                setSelectedCategory,
                notifications,
                setNotifications,
            }}>
            {children}
        </gameContext.Provider>
    );
}

export function useGameCtx() {
    return useContext(gameContext);
}
