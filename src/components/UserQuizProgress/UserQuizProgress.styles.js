import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    gap: 10px;

    img {
        height: 36px;
        width: 36px;
        border-radius: 50%;
    }
`;

export const UserAndSteps = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;

    p {
        font-weight: 500;
        color: ${({ theme }) => theme.colors.dark};
    }
`;

export const StepsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const Step = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.lightPurple2};
    ${({ theme, variant }) => variant === 'correct' && `background-color: ${theme.colors.green};`};
    ${({ theme, variant }) => variant === 'incorrect' && `background-color: ${theme.colors.pink};`};

    img {
        width: 50%;
        height: 50%;
        object-fit: cover;
    }
`;
