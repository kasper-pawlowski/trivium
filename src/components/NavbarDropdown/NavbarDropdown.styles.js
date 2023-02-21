import { ArrowDown2 } from 'iconsax-react';
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

export const StyledArrowDown2 = styled(ArrowDown2)`
    color: ${({ theme }) => theme.colors.lightPurple};
    transition-duration: 0.2s;
    scale: ${({ open }) => (open ? '1 -1' : '-1 1')};
    cursor: pointer;
`;

export const Dropdown = styled.div`
    position: fixed;
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    right: 14px;
    top: 56px;
    border-radius: 13px;
    color: ${({ theme }) => theme.colors.dark};
    gap: 10px;
    box-shadow: rgba(34, 34, 34, 0.24) 0px 3px 8px;
`;

export const ProfileSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightPurple};
`;

export const Avatar = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`;

export const Name = styled.p`
    font-size: 17px;
    font-weight: 500;
    white-space: nowrap;
    margin-bottom: 6px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export const Uid = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.lightDark};
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    transition-duration: 0.2s;

    p {
        margin-left: 16px;
    }

    &:hover span {
        opacity: 1;
    }

    span {
        transition-duration: 0.2s;
        opacity: 0;
        display: flex;
        align-items: center;
    }
`;

export const Option = styled.button`
    width: 100%;
    border: none;
    padding: 16px 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    transition-duration: 0.2s;
    background-color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    font-size: 14px;
    &:hover {
        background-color: ${({ theme }) => theme.colors.lightPurple2};
    }
    &:last-child {
        border-bottom-left-radius: 13px;
        border-bottom-right-radius: 13px;
    }
`;
