import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import { GlobalStyle } from '@styles/GlobalStyle';
import Navbar from '@components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from '@pages/Login/Login';
import { useUserAuth } from '@contexts/AuthContext';
import Loader from '@components/Loader/Loader';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { db } from '@services/firebase';
import { BottomLabel, Layout, LayoutContent, LeftCorner, RightCorner } from '@components/Layout';
import Home from '@pages/Home/Home';
import TabBar from '@components/TabBar/TabBar';
import { useMediaQuery } from 'react-responsive';
import Category from '@pages/Category/Category';
import Friends from '@pages/Friends/Friends';
import User from '@pages/User/User';
import Notifications from '@pages/Notifications/Notifications';
import { useGameCtx } from '@contexts/GameContext';
import { Toaster } from 'react-hot-toast';

const AuthenticatedApp = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [searchValue, setSearchValue] = useState('');
    const { user } = useUserAuth();
    const { setNotifications, setHasUnreadNotifications } = useGameCtx();

    useEffect(() => {
        const q = query(collection(db, 'invitations'), where('receiver.uid', '==', user.uid), orderBy('timestamp', 'desc'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const notificationsArray = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setNotifications(notificationsArray);
            notificationsArray.length > 0 && setHasUnreadNotifications(true);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <Layout>
            <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
            <LayoutContent>
                <Routes>
                    <Route path="/" element={<Home searchValue={searchValue} />} />
                    <Route path="/category" element={<Category />} />
                    <Route path="/friends" element={<Friends />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/user/:uid" element={<User />} />
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
            <Toaster />
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
