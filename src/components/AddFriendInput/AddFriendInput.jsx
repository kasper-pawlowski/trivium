import { useUserAuth } from '@contexts/AuthContext';
import { db } from '@services/firebase';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
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

    const handleFriendRequest = async () => {
        const usersQuery = query(collection(db, 'users'), where('uid', '==', inputValue));
        const foundUsers = await getDocs(usersQuery);
        if (foundUsers.docs.length === 0) {
            setError('No user found with this uid');
            console.log('No user found with this uid');
        }
        if (foundUsers.docs.length > 0) {
            setError(null);
            const searchedUser = foundUsers.docs[0].data();
            console.log(searchedUser);
            const friendsQuery = query(collection(db, 'users', user.googleUid, 'friends'), where('uid', '==', searchedUser.uid));
            const foundFriends = await getDocs(friendsQuery);
            console.log(foundFriends);
            if (foundFriends.docs.length === 0) {
                setError(null);
                console.log('jest taki uzytkownik, nie jest znajomym');
                await addDoc(collection(db, 'users', user.googleUid, 'friends'), {
                    displayName: searchedUser.displayName,
                    photoURL: searchedUser.photoURL,
                    uid: searchedUser.uid,
                    status: 'pending',
                });
            }
            if (foundFriends.docs.length > 0) {
                setError('This user is already your friend');
                console.log('This user is already your friend');
            }
        }
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
