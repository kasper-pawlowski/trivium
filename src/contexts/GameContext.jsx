import { createContext, useContext, useState } from 'react';

const gameContext = createContext();

const initialState = {};

export function GameContextProvider({ children }) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [notifications, setNotifications] = useState([]);
    const [hasUnreadNotifications, setHasUnreadNotifications] = useState(null);

    return (
        <gameContext.Provider
            value={{
                selectedCategory,
                setSelectedCategory,
                notifications,
                setNotifications,
                hasUnreadNotifications,
                setHasUnreadNotifications,
            }}>
            {children}
        </gameContext.Provider>
    );
}

export function useGameCtx() {
    return useContext(gameContext);
}
