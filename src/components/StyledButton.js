import styled, { css } from 'styled-components';

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.dark};
    padding: 14px 40px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 13px;
    gap: 10px;
    transition-duration: 0.2s;
    ${({ theme, variant }) => variant === 'primary' && `background-color: ${theme.colors.primary};`};
    ${({ theme, variant }) => variant === 'secondary' && `background-color: ${theme.colors.white};`};

    &:active {
        transform: translateY(2px);
    }
`;

export default StyledButton;
