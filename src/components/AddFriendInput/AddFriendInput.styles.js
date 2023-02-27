import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 13px;
    border: 2px solid ${({ theme }) => theme.colors.lightPurple};
    padding: 6px;
    transition-duration: 0.2s;
    p {
        font-size: 20px;
        font-weight: 500;
        padding-left: 10px;
    }

    &:hover,
    &:focus-within {
        border-color: ${({ theme }) => theme.colors.primary};
    }
`;

export const Input = styled.input`
    border: none;
    outline: none;
    font-size: 18px;
    font-weight: 500;
    width: 140px;

    &::placeholder {
        color: ${({ theme }) => theme.colors.lightPurple};
        font-weight: 400;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &[type='number'] {
        -moz-appearance: textfield;
    }
`;

export const Button = styled.button`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    padding: 10px 0;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 400;
    width: 160px;
    transition-duration: 0.2s;

    &:active {
        transform: translateY(1px);
    }

    &:disabled {
        background-color: ${({ theme }) => theme.colors.lightPrimary};
        cursor: not-allowed;
    }
`;
