import React, { useState } from 'react';
import { Logo, StyledFcGoogle, Wrapper } from './Login.styles';
import triviumLogoWithText from '@assets/triviumLogoWithText.svg';
import StyledButton from '@components/StyledButton';
import { auth, provider } from '@services/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).catch((error) => {
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

export default Login;
