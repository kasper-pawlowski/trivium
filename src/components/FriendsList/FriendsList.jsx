import FriendTile from '@components/FriendTile/FriendTile';
import Loader from '@components/Loader/Loader';
import { useUserAuth } from '@contexts/AuthContext';
import { db } from '@services/firebase';
import { collection, query, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Grid, Title, Wrapper } from './FriendsList.styles';

const FriendsList = () => {
    const [loading, isLoading] = useState(true);
    const [friends, setFriends] = useState([]);
    const { user } = useUserAuth();

    useEffect(() => {
        const q = query(collection(db, 'users', user.googleUid, 'friends'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const newFriends = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setFriends(newFriends);
            isLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <Wrapper>
            <Title>All friends:</Title>
            {loading ? (
                <Loader variant="primary" />
            ) : (
                <Grid>
                    {friends.map((friend) => (
                        <FriendTile key={friend.uid} friend={friend} />
                    ))}
                </Grid>
            )}
        </Wrapper>
    );
};

export default FriendsList;
