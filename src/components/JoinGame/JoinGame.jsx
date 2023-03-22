import { database } from '@services/firebase';
import { get, ref } from 'firebase/database';
import { InfoCircle } from 'iconsax-react';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Input, InputWrapper, SubmitButton, SubTitle, Title, Wrapper } from './JoinGame.styles';

const JoinGame = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setValue(value);
    };

    const handleSubmit = () => {
        get(ref(database, value)).then((snapshot) => {
            if (snapshot.exists()) {
                navigate(`/lobby/${value}`);
            } else {
                setValue('');
                toast("Game with this ID doesn't exists", {
                    icon: <InfoCircle />,
                    style: {
                        border: '1px solid #EF8136',
                        padding: '16px',
                        backgroundColor: '#FEF7EC',
                        color: '#EF8136',
                    },
                });
            }
        });
    };

    return (
        <Wrapper>
            <Title>Join the Game</Title>
            <SubTitle>Enter game Id to start playing</SubTitle>
            <InputWrapper>
                <Input value={value} onChange={handleInputChange} />
                <SubmitButton disabled={value === '' ? true : false} onClick={handleSubmit}>
                    Join
                </SubmitButton>
            </InputWrapper>
        </Wrapper>
    );
};

export default JoinGame;
