import React, { useEffect, useState } from 'react';
import Loader from '@components/Loader/Loader';
import useCopyUidToClipboard from '@hooks/useCopyUidToClipboard';
import { useUserAuth } from '@contexts/AuthContext';
import { db } from '@services/firebase';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { Copy, CopySuccess } from 'iconsax-react';
import { useNavigate, useParams } from 'react-router-dom';
import { Avatar, DisplayName, InfoWrapper, Uid, Wrapper } from './User.styles';
import StyledButton from '@components/StyledButton';

const User = () => {
    const { copyUidToClipboard, copied } = useCopyUidToClipboard();
    const [data, setData] = useState(null);
    const [loading, isLoading] = useState(true);
    const { uid } = useParams();
    const { user } = useUserAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user.uid == uid) {
            setData(user);
            isLoading(false);
        } else {
            const q = query(collection(db, 'users'), where('uid', '==', uid));
            const getUser = async () => {
                const querySnapshot = await getDocs(q);
                console.log(querySnapshot);
                if (!querySnapshot.empty) {
                    setData(querySnapshot.docs[0].data());
                    isLoading(false);
                } else {
                    console.log('No such document!');
                    navigate('/');
                }
            };
            getUser();
        }
    }, [user, uid]);

    // const addUserToFriends = async () => {
    //     const docRef = await addDoc(collection(db, 'users', 'wyafRsFpDZZjfV5eZJ14YStDa1L2', 'friends'), {
    //         ...data,
    //         status: 'accepted',
    //     });
    //     console.log('Document written with ID: ', docRef.id);
    // };

    if (loading)
        return (
            <Wrapper>
                <Loader variant="primary" />
            </Wrapper>
        );
    return (
        <Wrapper>
            <InfoWrapper>
                <Avatar src={data.photoURL} alt="" draggable={false} />
                <DisplayName>{data.displayName}</DisplayName>
                <Uid onClick={() => copyUidToClipboard(data)}>
                    <p>#{data.uid}</p>
                    <span>{copied ? <CopySuccess color="#6A5AE0" size="16" variant="Outline" /> : <Copy size="16" variant="Outline" />}</span>
                </Uid>
            </InfoWrapper>
            {/* <button onClick={addUserToFriends}>asdasdasasdasd</button> */}
            {user.uid == uid && (
                <StyledButton onClick={() => navigate(`/friends`)} variant="primary">
                    Friends
                </StyledButton>
            )}
        </Wrapper>
    );
};

export default User;
