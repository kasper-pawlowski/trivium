import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import { GlobalStyle } from '@styles/GlobalStyle';
import Navbar from '@components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from '@pages/Login/Login';
import { useUserAuth } from '@contexts/AuthContext';
import Loader from '@components/Loader/Loader';
import { auth } from '@services/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { BottomLabel, Layout, LayoutContent, LeftCorner, RightCorner } from '@components/Layout';
import Home from '@pages/Home/Home';
import TabBar from '@components/TabBar/TabBar';
import { useMediaQuery } from 'react-responsive';

const AuthenticatedApp = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [searchValue, setSearchValue] = useState('');

    return (
        <Layout>
            <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
            <LayoutContent>
                <Routes>
                    <Route path="/" element={<Home searchValue={searchValue} />} />
                </Routes>
            </LayoutContent>
            {isMobile ? (
                <TabBar />
            ) : (
                <>
                    <BottomLabel />
                    <LeftCorner />
                    <RightCorner />
                </>
            )}
        </Layout>
    );
};

const Root = () => {
    const { user } = useUserAuth();
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (user !== undefined) {
            setIsReady(true);
        }
    }, [user]);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {isReady ? user !== null ? <AuthenticatedApp /> : <Login /> : <Loader isFullHeight variant="secondary" />}
        </ThemeProvider>
    );
};

export default Root;
