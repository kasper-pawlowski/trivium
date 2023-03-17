import styled, { css, keyframes } from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    width: 70px;
    height: 70px;
`;

export const TimerBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #f2f2f2;
`;

const animation = keyframes`
    to {
        --percentage: 100%;
    }    
`;

export const TimerFill = styled.div`
    --percentage: 0%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: conic-gradient(from 0deg, ${({ theme }) => theme.colors.lightPink} var(--percentage), ${({ theme }) => theme.colors.pink} 0);
    animation: ${animation} ${({ duration }) => duration}s linear;
    ${({ clicked }) =>
        clicked
            ? css`
                  animation-play-state: paused;
              `
            : css`
                  animation-play-state: running;
              `}
    @property --percentage {
        initial-value: 0%;
        inherits: false;
        syntax: '<percentage>';
    }
`;

export const TimerText = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.dark};
`;
