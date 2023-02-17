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

export const LeftCorner = styled.img`
    position: absolute;
    top: -12px;
    left: 13px;
`;

export const RightCorner = styled.img`
    position: absolute;
    top: -12px;
    right: 13px;
`;
