import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 9px 20px;
    background-color: ${({ theme }) => theme.colors.lightPrimary};
    border-radius: 100vw;
    transition-duration: 0.2s;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const Icon = styled(FiSearch)`
    color: ${({ theme }) => theme.colors.lightPurple};
`;

export const Input = styled.input`
    width: 260px;
    font-size: 15px;
    font-weight: 400;
    background: none;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.white};

    &::placeholder {
        color: ${({ theme }) => theme.colors.lightPurple};
        font-weight: 400;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;
