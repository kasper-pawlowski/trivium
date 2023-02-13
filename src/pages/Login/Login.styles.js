import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 14%;
    height: 100dvh;
    gap: 70px;
`;

export const Logo = styled.img`
    height: 160px;
    transition-duration: 0.2s;
    &:active {
        transform: translateY(5px);
    }
`;

export const StyledFcGoogle = styled(FcGoogle)`
    font-size: 22px;
`;
