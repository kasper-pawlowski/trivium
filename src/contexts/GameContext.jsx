import { createContext, useContext, useState } from 'react';

const gameContext = createContext();

const initialState = {};

export function GameContextProvider({ children }) {
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <gameContext.Provider
            value={{
                selectedCategory,
                setSelectedCategory,
            }}>
            {children}
        </gameContext.Provider>
    );
}

export function useGameCtx() {
    return useContext(gameContext);
}
