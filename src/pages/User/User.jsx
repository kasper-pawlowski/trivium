import Loader from '@components/Loader/Loader';
import { useUserAuth } from '@contexts/AuthContext';
import useCopyUidToClipboard from '@hooks/useCopyUidToClipboard';
import { db } from '@services/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { Copy, CopySuccess } from 'iconsax-react';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, DisplayName, InfoWrapper, Uid, Wrapper } from './User.styles';

const User = () => {
    const { copyUidToClipboard, copied } = useCopyUidToClipboard();
    const [data, setData] = useState(null);
    const [loading, isLoading] = useState(true);
    const { uid } = useParams();
    const { user } = useUserAuth();

    useEffect(() => {
        if (user.uid == uid) {
            setData(user);
            isLoading(false);
        } else {
            const docRef = doc(db, 'users', uid);
            const getUser = async () => {
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setData(docSnap.data());
                    isLoading(false);
                } else {
                    console.log('No such document!');
                }
            };
            getUser();
        }
    }, [user, uid]);

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
                    <p>#{user.uid}</p>
                    <span>{copied ? <CopySuccess color="#6A5AE0" size="16" variant="Outline" /> : <Copy size="16" variant="Outline" />}</span>
                </Uid>
            </InfoWrapper>
        </Wrapper>
    );
};

export default User;
