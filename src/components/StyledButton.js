import styled from 'styled-components';

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.dark};
    background-color: ${({ theme }) => theme.colors.white};
    padding: 14px 40px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 13px;
    gap: 10px;
    transition-duration: 0.2s;

    &:active {
        transform: translateY(2px);
    }
`;

export default StyledButton;
