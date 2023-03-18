import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    padding-top: 4rem;
`;

export const IconWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.lightPurple2};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 26px;
`;

export const Icon = styled.img`
    width: 50px;
    height: 50px;
`;

export const Title = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.dark};
`;

export const ProgressWrapper = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
`;

export const ProgressDot = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.lightPurple2};
    ${({ theme, variant }) => variant === 'current' && `background-color: ${theme.colors.primary};`};
    ${({ theme, variant }) => variant === 'correct' && `background-color: ${theme.colors.green};`};
    ${({ theme, variant }) => variant === 'incorrect' && `background-color: ${theme.colors.pink};`};

    img {
        width: 50%;
        height: 50%;
        object-fit: cover;
    }
`;
