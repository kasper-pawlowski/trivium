import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const StyledLink = styled(Link)`
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const NotificationsNumber = styled.div`
    position: absolute;
    top: 50%;
    right: 50%;
    translate: 100% -120%;
    width: 16px;
    height: 16px;
    font-size: 11px;
    font-weight: 300;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.pink};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Avatar = styled.img`
    width: 26px;
    height: 26px;
    border-radius: 50%;
`;

export const LeftCorner = styled.div`
    width: 13px;
    height: 13px;
    position: absolute;
    top: -13px;
    left: 14px;
    background-color: ${({ theme }) => theme.colors.primary};
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-bottom-left-radius: 13px;
        background-color: ${({ theme }) => theme.colors.white};
    }
`;

export const RightCorner = styled.div`
    width: 13px;
    height: 13px;
    position: absolute;
    top: -13px;
    right: 14px;

    background-color: ${({ theme }) => theme.colors.primary};
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-bottom-right-radius: 13px;
        background-color: ${({ theme }) => theme.colors.white};
    }
`;
