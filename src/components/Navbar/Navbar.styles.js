import { ArrowDown2 } from 'iconsax-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    padding: 10px 14px;
    @media screen and (max-width: 768px) {
        gap: 50px;
    }
`;

export const StyledLink = styled(Link)`
    flex: 1;
    height: 100%;
    transition-duration: 0.2s;
    &:active {
        transform: translateY(1px);
    }
    img {
        height: 100%;
    }
`;

export const UserContainer = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
`;

export const Avatar = styled.img`
    height: 100%;
    border-radius: 50%;
    cursor: pointer;
`;

export const LeftCorner = styled.div`
    width: 13px;
    height: 13px;
    position: absolute;
    bottom: -13px;
    left: 14px;
    background-color: ${({ theme }) => theme.colors.primary};
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-top-left-radius: 13px;
        background-color: ${({ theme }) => theme.colors.white};
    }
`;

export const RightCorner = styled.div`
    width: 13px;
    height: 13px;
    position: absolute;
    bottom: -13px;
    right: 14px;

    background-color: ${({ theme }) => theme.colors.primary};
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-top-right-radius: 13px;
        background-color: ${({ theme }) => theme.colors.white};
    }
`;
