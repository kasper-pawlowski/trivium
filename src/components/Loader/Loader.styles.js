import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Spinner = styled.div`
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);
    border-top: 2px solid ${({ theme }) => theme.colors.white};
    border-right: 2px solid ${({ theme }) => theme.colors.white};
    border-bottom: 2px solid ${({ theme }) => theme.colors.white};
    border-left: 2px solid ${({ theme }) => theme.colors.pink};
    background: transparent;
    width: 24px;
    height: 24px;
    border-radius: 50%;
`;
