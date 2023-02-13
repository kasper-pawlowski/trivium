import { UserAuthContextProvider } from '@contexts/AuthContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Root from './Root';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <UserAuthContextProvider>
            <Root />
        </UserAuthContextProvider>
    </BrowserRouter>
);
