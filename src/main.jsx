import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { UserAuthContextProvider } from '@contexts/AuthContext';
import { GameContextProvider } from '@contexts/GameContext';
import Root from './Root';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <UserAuthContextProvider>
            <GameContextProvider>
                <Root />
            </GameContextProvider>
        </UserAuthContextProvider>
    </BrowserRouter>
);
