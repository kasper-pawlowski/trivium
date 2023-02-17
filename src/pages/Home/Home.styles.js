import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px 20px 30% 20px;
    @media screen and (min-width: 768px) {
        padding: 40px;
    }
`;

export const Logo = styled.img`
    width: 100px;
    border-radius: 26px;
    box-shadow: rgba(34, 34, 34, 0.137) 0px 3px 8px;
    cursor: context-menu;
    transition-duration: 0.2s;
    &:active {
        transform: translateY(2px);
    }
`;

export const H1 = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 34px;
`;

export const H2 = styled.p`
    width: 70%;
    color: ${({ theme }) => theme.colors.gray};
    font-size: 18px;
    margin-bottom: 40px;
    text-align: center;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;
