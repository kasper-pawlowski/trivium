import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db } from '@services/firebase';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState(undefined);

    function logOut() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            if (currentuser) {
                const getUser = async () => {
                    const userRef = doc(db, 'users', currentuser.uid);
                    const unsub = onSnapshot(userRef, (docSnap) => {
                        if (docSnap.exists()) {
                            setUser(docSnap.data());
                            unsub(); // zakończ nasłuchiwanie zmian po ustawieniu danych użytkownika
                        } else {
                            console.log('no user');
                        }
                    });
                };
                getUser();
            } else {
                setUser(null);
            }
        });

        return () => {
            unsubscribe();
        };
    }, [auth]);

    return <userAuthContext.Provider value={{ user, logOut }}>{children}</userAuthContext.Provider>;
}

export function useUserAuth() {
    return useContext(userAuthContext);
}
