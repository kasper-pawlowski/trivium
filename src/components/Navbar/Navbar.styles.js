import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsFillCaretDownFill } from 'react-icons/bs';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    padding: 10px 14px;
`;

export const StyledLink = styled(Link)`
    height: 100%;
    transition-duration: 0.2s;
    &:active {
        transform: translateY(1px);
    }
    img {
        height: 100%;
    }
`;

export const Caret = styled(BsFillCaretDownFill)`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.lightGray};
    transition-duration: 0.2s;
`;

export const UserContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    &:hover ${Caret} {
        color: ${({ theme }) => theme.colors.gray};
    }
    &:active ${Caret} {
        transform: translateY(1px);
    }
`;

export const Avatar = styled.img`
    height: 100%;
    border-radius: 50%;
`;
