import styled from 'styled-components';

export const Wrapper = styled.div`
    border-radius: 20px;
    border: 2px solid ${({ theme }) => theme.colors.lightPurple};
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    transition-duration: 0.2s;

    &:hover {
        border: 2px solid ${({ theme }) => theme.colors.primary};
    }

    &:active {
        transform: translateY(2px);
    }
`;

export const Avatar = styled.img`
    width: 60px;
    border-radius: 50%;
    cursor: pointer;
`;

export const DisplayName = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.dark};
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;
