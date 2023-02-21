import FriendsList from '@components/FriendsList/FriendsList';
import React from 'react';
import { Wrapper } from './Friends.styles';

const Friends = () => {
    // const handleChange = (e) => {
    //     console.log(e.target.value.length);
    //     if (e.target.value.length <= 4) {
    //     } else {
    //         e.target.value = e.target.value.slice(0, 4);
    //     }
    // };

    return (
        <Wrapper>
            <FriendsList />
            {/* <SearchFriendsTitle>Enter friend's code</SearchFriendsTitle>
            <SearchUidWrapper>
                <SearchUidInput>
                    <SearchUidLabel>#</SearchUidLabel>
                    <Input type="number" placeholder="0000" onChange={(e) => handleChange(e)} />
                </SearchUidInput>
                <SearchUiButton>Add</SearchUiButton>
            </SearchUidWrapper> */}
        </Wrapper>
    );
};

export default Friends;
