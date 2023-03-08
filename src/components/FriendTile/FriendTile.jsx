import { useUserAuth } from '@contexts/AuthContext';
import { db } from '@services/firebase';
import { deleteDoc, doc } from 'firebase/firestore';
import { Trash } from 'iconsax-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, DisplayName, TrashIcon, Wrapper } from './FriendTile.styles';

const FriendTile = ({ friend }) => {
    const navigate = useNavigate();
    const [hoverColor, setHoverColor] = useState('#a699fa');
    const { user } = useUserAuth();

    const handleMouseEnter = () => {
        setHoverColor('#6A5AE0');
    };

    const handleMouseLeave = () => {
        setHoverColor('#a699fa');
    };

    const handleDeleteUserFromFriendsList = async () => {
        await deleteDoc(doc(db, 'users', user.googleUid, 'friends', `${user.uid}${friend.uid}`));
        await deleteDoc(doc(db, 'users', friend.googleUid, 'friends', `${friend.uid}${user.uid}`));
    };

    return (
        <Wrapper>
            <Avatar onClick={() => navigate(`/user/${friend.uid}`)} src={friend?.photoURL} alt="" draggable="false" />
            <DisplayName onClick={() => navigate(`/user/${friend.uid}`)}>{friend?.displayName}</DisplayName>
            <TrashIcon
                onClick={handleDeleteUserFromFriendsList}
                size="28"
                color={hoverColor}
                variant="Outline"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
        </Wrapper>
    );
};

export default FriendTile;
