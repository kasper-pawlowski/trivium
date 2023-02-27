import { useUserAuth } from '@contexts/AuthContext';
import { db } from '@services/firebase';
import { collection, doc, getDocs, query, setDoc, Timestamp, where } from 'firebase/firestore';
import React, { useState } from 'react';
import { Button, Input, InputWrapper, Wrapper } from './AddFriendInput.styles';

const AddFriendInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(null);
    const { user } = useUserAuth();

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (value.length <= 4) {
            setInputValue(value);
        }
    };

    const searchUser = async (uid) => {
        const usersQuery = query(collection(db, 'users'), where('uid', '==', uid));
        const foundUsers = await getDocs(usersQuery);
        return foundUsers.docs.length > 0 ? foundUsers.docs[0].data() : null;
    };

    const checkFriendship = async (user, searchedUser) => {
        const friendsQuery = query(collection(db, 'users', user.googleUid, 'friends'), where('uid', '==', searchedUser.uid));
        const foundFriends = await getDocs(friendsQuery);
        return foundFriends.docs.length > 0;
    };

    const checkIfInvitationExists = async (user, searchedUser) => {
        const invitationQuery = query(
            collection(db, 'invitations'),
            where('sender.uid', '==', user.uid),
            where('receiver.uid', '==', searchedUser.uid)
        );
        const invitations = await getDocs(invitationQuery);
        return invitations.docs.length > 0;
    };

    const sendFriendRequest = async (user, searchedUser) => {
        const invitationRef = doc(db, 'invitations', `${user.uid}${searchedUser.uid}`);
        await setDoc(invitationRef, {
            sender: {
                displayName: user.displayName,
                photoURL: user.photoURL,
                uid: user.uid,
            },
            receiver: {
                displayName: searchedUser.displayName,
                photoURL: searchedUser.photoURL,
                uid: searchedUser.uid,
            },
            inviteStatus: 'pending',
            timestamp: Timestamp.now(),
        });
    };

    const handleFriendRequest = async () => {
        const searchedUser = await searchUser(inputValue);
        if (!searchedUser) {
            setError('No user found with this uid');
            console.log('No user found with this uid');
            return;
        }

        const alreadyFriends = await checkFriendship(user, searchedUser);
        if (alreadyFriends) {
            setError('This user is already your friend');
            console.log('This user is already your friend');
            return;
        }

        const invitationExists = await checkIfInvitationExists(user, searchedUser);
        if (invitationExists) {
            setError('invitationExists');
            console.log('invitationExists');
            return;
        }

        await sendFriendRequest(user, searchedUser);
        setInputValue('');
        setError(null);
        console.log('Invitation Sended');
    };

    return (
        <Wrapper>
            <InputWrapper>
                <p>#</p>
                <Input type="number" placeholder="0000" value={inputValue} onChange={handleInputChange} />
                <Button disabled={!inputValue ? true : false} onClick={handleFriendRequest}>
                    Sent friend request
                </Button>
            </InputWrapper>
            {error && <p>{error}</p>}
        </Wrapper>
    );
};

export default AddFriendInput;
