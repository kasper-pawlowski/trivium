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
