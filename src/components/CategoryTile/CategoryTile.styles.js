import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled(Link)`
    background-color: ${({ theme }) => theme.colors.lightPurple2};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px 40px;
    border-radius: 22px;
    cursor: pointer;
    transition-duration: 0.2s;

    &:hover {
        background-color: ${({ theme }) => theme.colors.lightPurple};
    }

    &:active {
        transform: translateY(2px);
    }
`;

export const IconWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 22px;
`;

export const Icon = styled.img`
    width: 30px;
    height: 30px;
`;

export const CategoryName = styled.p`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 16px;
    font-weight: 600;
    width: 120px;
    text-align: center;
`;
