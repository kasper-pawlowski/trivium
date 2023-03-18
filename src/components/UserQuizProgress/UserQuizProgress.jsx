import { useUserAuth } from '@contexts/AuthContext';
import { useGameCtx } from '@contexts/GameContext';
import React from 'react';
import { Step, StepsContainer, UserAndSteps, Wrapper } from './UserQuizProgress.styles';

const UserQuizProgress = () => {
    const { user } = useUserAuth();
    const { quizData, userAnswers } = useGameCtx();

    return (
        <Wrapper>
            <img src={user.photoURL} alt="" />
            <UserAndSteps>
                <p>{user.displayName}</p>
                <StepsContainer>
                    {quizData?.map((e, i) => (
                        <Step
                            key={i}
                            {...(userAnswers[i] === 'correct' && { variant: 'correct' })}
                            {...(userAnswers[i] === 'incorrect' && { variant: 'incorrect' })}
                        />
                    ))}
                </StepsContainer>
            </UserAndSteps>
        </Wrapper>
    );
};

export default UserQuizProgress;
