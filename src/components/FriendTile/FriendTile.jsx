import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, DisplayName, Wrapper } from './FriendTile.styles';

const FriendTile = ({ friend }) => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Avatar onClick={() => navigate(`/user/${friend.uid}`)} src={friend.photoURL} alt="" draggable="false" />
            <DisplayName onClick={() => navigate(`/user/${friend.uid}`)}>{friend.displayName}</DisplayName>
        </Wrapper>
    );
};

export default FriendTile;
