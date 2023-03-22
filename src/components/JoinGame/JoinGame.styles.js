import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.lightPink};
    border: 1px solid ${({ theme }) => theme.colors.pink};
    padding: 26px 30px;
    border-radius: 13px;
`;

export const Title = styled.p`
    color: ${({ theme }) => theme.colors.deepRed};
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 6px;
`;

export const SubTitle = styled.p`
    color: ${({ theme }) => theme.colors.lightRed};
    margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
    display: flex;
    gap: 10px;
`;

export const Input = styled.input`
    border: 1px solid ${({ theme }) => theme.colors.pink};
    width: 200px;
    background-color: #ff8fa230;
    font-weight: 500;
    padding: 8px 20px;
    border-radius: 13px;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.deepRed};
`;

export const SubmitButton = styled.button`
    border: none;
    background-color: ${({ theme }) => theme.colors.pink};
    font-weight: 500;
    padding: 10px 20px;
    border-radius: 13px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 15px;
    transition-duration: 0.2s;

    &:active {
        transform: translateY(1px);
    }
`;
