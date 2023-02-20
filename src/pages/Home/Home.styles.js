import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`;

export const Seperator = styled.div`
    width: 300px;
    height: 2px;
    background: linear-gradient(90deg, rgba(15, 17, 21, 0) 0%, #c5bef3 35%, #c5bef3 65%, rgba(255, 255, 255, 0) 100%);
`;

export const Header = styled.div`
    display: flex;
    gap: 20px;
`;

export const AppInfo = styled.div`
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

export const ChallengeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    border-radius: 13px;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.lightPink};
    border: 1px solid ${({ theme }) => theme.colors.pink};
`;

export const ChallengeTitle = styled.p`
    color: ${({ theme }) => theme.colors.deepRed};
    font-size: 20px;
    font-weight: 500;
`;
