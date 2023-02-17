import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 12px 20px;
    border: 2px solid ${({ theme }) => theme.colors.lightPurple};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 100vw;
    transition-duration: 0.2s;

    &:focus-within {
        border-color: ${({ theme }) => theme.colors.primary};
    }

    @media screen and (max-width: 425px) {
        width: 100%;
    }
`;

export const Icon = styled(FiSearch)`
    color: ${({ theme }) => theme.colors.gray};
`;

export const Input = styled.input`
    width: 260px;
    font-size: 16px;
    font-weight: 500;
    background: none;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.dark};

    &::placeholder {
        color: ${({ theme }) => theme.colors.gray};
        font-weight: 400;
    }

    @media screen and (max-width: 425px) {
        width: 100%;
    }
`;
