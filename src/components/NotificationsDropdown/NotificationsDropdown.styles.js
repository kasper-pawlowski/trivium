import { Notification } from 'iconsax-react';
import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    user-select: none;

    .drop {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const StyledNotificationIcon = styled(Notification)`
    color: ${({ theme }) => theme.colors.lightPurple};
    transition-duration: 0.2s;
    cursor: pointer;
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

export const Dropdown = styled.div`
    position: absolute;
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    right: -20px;
    top: 60px;
    border-radius: 13px;
    color: ${({ theme }) => theme.colors.dark};
    gap: 12px;
    box-shadow: 0 4px 16px 0 ${({ theme }) => theme.colors.lightPrimary};
    z-index: 999;

    &::after {
        content: '';
        position: absolute;
        top: -6px;
        right: 20px;
        width: 0;
        height: 0;
        border-top: 10px solid ${({ theme }) => theme.colors.white};
        border-right: 10px solid transparent;
        border-bottom: 0 solid transparent;
        border-left: 10px solid transparent;
        transform: rotate(180deg);
    }
`;

export const Title = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.dark};
`;
