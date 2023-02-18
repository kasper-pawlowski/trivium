import React, { useState, useEffect } from 'react';
import { Logo, StyledFcGoogle, Wrapper } from './Login.styles';
import triviumLogoWithText from '@assets/triviumLogoWithText.svg';
import StyledButton from '@components/StyledButton';
import { auth, db, provider } from '@services/firebase';
import { signInWithPopup } from 'firebase/auth';
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';

function Login() {
    const [uid, setUid] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUid(user.uid);
            }
        });

        return unsubscribe;
    }, []);

    const handleSignInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);

            const user = result.user;
            let userRef = null;
            let userDoc = null;

            // Check if user already has a document in Firestore collection
            const q = query(collection(db, 'users'), where('uid', '==', user.uid));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.size === 0) {
                // If user does not have a document, create one
                userDoc = {
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    uid: user.uid,
                };
                userRef = await setDoc(doc(db, 'users', user.uid), userDoc);
            } else {
                // If user already has a document, retrieve it
                userRef = querySnapshot.docs[0].ref;
                userDoc = await getDoc(userRef);
            }

            setUid(userDoc.data().uid);
        } catch (error) {
            console.error(error);
        }
    };

    return <div>{uid ? <p>You are logged in with uid: {uid}</p> : <button onClick={handleSignInWithGoogle}>Sign in with Google</button>}</div>;
}

import React, { useState } from 'react';
import { Logo, StyledFcGoogle, Wrapper } from './Login.styles';
import triviumLogoWithText from '@assets/triviumLogoWithText.svg';
import StyledButton from '@components/StyledButton';
import { auth, db, provider } from '@services/firebase';
import { signInWithPopup } from 'firebase/auth';
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';

const Login = () => {
    const [error, setError] = useState(null);

    const generateRandomUID = () => {
        const uid = Math.floor(1000 + Math.random() * 9000);
        return uid;
    };

    const UIDValidation = async (uid) => {
        const querySnapshot = await getDocs(query(collection(db, 'users'), where('uid', '==', '0321')));
        // querySnapshot.forEach((doc) => {
        //     console.log(doc.id, ' => ', doc.data());
        //     console.log(doc);
        // });
        // console.log(uid);
        return querySnapshot;
    };

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(async ({ user }) => {
                await UIDValidation(generateRandomUID())
                    .then((e) => {
                        console.log(e.docs);
                        console.log(e.docs.length);
                        setDoc(doc(db, 'users', '0301'), {
                            displayName: user.displayName,
                            photoURL: user.photoURL,
                            uid: uid,
                        });
                    })
                    .catch((err) => console.log(err));
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError('Nie udało się zalogować');
                console.log(errorMessage);
            });
    };

    return (
        <Wrapper>
            <Logo draggable={false} src={triviumLogoWithText} alt="" />
            <StyledButton onClick={signInWithGoogle}>
                <StyledFcGoogle /> Login with Google
            </StyledButton>
            {error && <p>{error}</p>}
        </Wrapper>
    );
};
