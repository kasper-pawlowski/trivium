import { useUserAuth } from '@contexts/AuthContext';
import { db } from '@services/firebase';
import { collection, doc, getDocs, query, setDoc, serverTimestamp, where } from 'firebase/firestore';
import { InfoCircle } from 'iconsax-react';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Button, Input, InputWrapper, Wrapper } from './AddFriendInput.styles';

const AddFriendInput = () => {
    const [inputValue, setInputValue] = useState('');
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
                googleUid: user.googleUid,
            },
            receiver: {
                displayName: searchedUser.displayName,
                photoURL: searchedUser.photoURL,
                uid: searchedUser.uid,
                googleUid: searchedUser.googleUid,
            },
            inviteStatus: 'pending',
            timestamp: serverTimestamp(),
        });
    };

    const handleFriendRequest = async () => {
        const searchedUser = await searchUser(inputValue);

        if (user.uid === searchedUser.uid) {
            toast('You cannot send a friend request to yourself', {
                icon: <InfoCircle />,
                style: {
                    border: '1px solid #EF8136',
                    padding: '16px',
                    backgroundColor: '#FEF7EC',
                    color: '#EF8136',
                },
            });
            return;
        }

        if (!searchedUser) {
            toast('No user found with this uid', {
                icon: <InfoCircle />,
                style: {
                    border: '1px solid #EF8136',
                    padding: '16px',
                    backgroundColor: '#FEF7EC',
                    color: '#EF8136',
                },
            });
            return;
        }

        const alreadyFriends = await checkFriendship(user, searchedUser);
        if (alreadyFriends) {
            toast.success('This user is already your friend', {
                style: {
                    border: '1px solid #62D346',
                    padding: '16px',
                    backgroundColor: '#F4FFFF',
                    color: '#62D346',
                },
            });
            return;
        }

        const invitationExists = await checkIfInvitationExists(user, searchedUser);
        if (invitationExists) {
            toast('Invitation has already been sent', {
                icon: <InfoCircle />,
                style: {
                    border: '1px solid #EF8136',
                    padding: '16px',
                    backgroundColor: '#FEF7EC',
                    color: '#EF8136',
                },
            });
            return;
        }

        await sendFriendRequest(user, searchedUser);
        setInputValue('');
        toast.success('Invitation Sended!', {
            style: {
                border: '1px solid #62D346',
                padding: '16px',
                backgroundColor: '#F4FFFF',
                color: '#62D346',
            },
        });
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
        </Wrapper>
    );
};

export default AddFriendInput;
