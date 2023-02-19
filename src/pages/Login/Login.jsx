import React, { useState } from 'react';
import { Logo, StyledFcGoogle, Wrapper } from './Login.styles';
import triviumLogoWithText from '@assets/triviumLogoWithText.svg';
import StyledButton from '@components/StyledButton';
import { auth, db, provider } from '@services/firebase';
import { signInWithPopup } from 'firebase/auth';
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';

const Login = () => {
    const signInWithGoogle = async () => {
        try {
            const res = await signInWithPopup(auth, provider);
            const user = res.user;
            const q = query(collection(db, 'users'), where('googleUid', '==', user.uid));
            const docs = await getDocs(q);
            if (docs.docs.length === 0) {
                let randomUid = Math.floor(1000 + Math.random() * 9000).toString();

                let randomUidQuery = query(collection(db, 'users'), where('uid', '==', randomUid));
                let querySnapshot = await getDocs(randomUidQuery);

                if (querySnapshot.size > 0) {
                    while (querySnapshot.size > 0) {
                        randomUid = Math.floor(1000 + Math.random() * 9000).toString();
                        randomUidQuery = query(collection(db, 'users'), where('uid', '==', randomUid));
                        querySnapshot = await getDocs(randomUidQuery);
                    }
                }
                await setDoc(doc(db, 'users', user.uid), {
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    googleUid: user.uid,
                    uid: randomUid,
                });
            }
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    return (
        <Wrapper>
            <Logo draggable={false} src={triviumLogoWithText} alt="" />
            <StyledButton variant="secondary" onClick={signInWithGoogle}>
                <StyledFcGoogle /> Login with Google
            </StyledButton>
        </Wrapper>
    );
};

export default Login;
