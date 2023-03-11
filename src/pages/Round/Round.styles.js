import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`;

export const Question = styled.p`
    font-size: 30px;
    text-align: center;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.dark};
`;

export const AnswersWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Answer = styled.button`
    background: none;
    border: none;
    padding: 20px;
    border-radius: 13px;
    border: 2px solid ${({ theme }) => theme.colors.lightPurple};
    font-weight: 500;
    font-size: 18px;
    transition-duration: 0.2s;

    &:hover {
        border: 2px solid ${({ theme }) => theme.colors.gray};
    }
`;
