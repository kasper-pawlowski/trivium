import React from 'react';
import FriendsList from '@components/FriendsList/FriendsList';
import { Wrapper } from './Friends.styles';
import AddFriendInput from '@components/AddFriendInput/AddFriendInput';

const Friends = () => {
    return (
        <Wrapper>
            <AddFriendInput />
            <FriendsList />
        </Wrapper>
    );
};

export default Friends;
