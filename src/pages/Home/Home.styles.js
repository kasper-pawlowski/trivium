import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const Logo = styled.img`
    width: 70px;
    border-radius: 17px;
    box-shadow: rgba(34, 34, 34, 0.137) 0px 3px 8px;
    cursor: context-menu;
    transition-duration: 0.2s;
    &:active {
        transform: translateY(2px);
    }
`;

export const TriviumTitle = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 30px;
`;

export const TriviumDescription = styled.p`
    width: 70%;
    color: ${({ theme }) => theme.colors.lightPrimary};
    font-weight: 400;
    font-size: 17px;
    margin-bottom: 40px;
    text-align: center;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;
