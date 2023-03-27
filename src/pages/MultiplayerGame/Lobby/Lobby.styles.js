import StyledButton from '@components/StyledButton';
import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    /* @media screen and (max-width: 768px) {
    } */
`;

export const ShareText = styled.p`
    color: ${({ theme }) => theme.colors.dark};
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 20px;
`;

export const GameIDWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 60px;
    p {
        padding: 13px 20px;
        border-radius: 13px;
        border: 2px solid ${({ theme }) => theme.colors.lightPurple};
        font-weight: 500;
        font-size: 18px;
    }
`;

export const CopyGameIDButton = styled.button`
    padding: 13px 20px;
    border-radius: 13px;
    border: 2px solid ${({ theme }) => theme.colors.lightPurple};
    font-weight: 500;
    font-size: 18px;

    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const UsersInLobbyWrapper = styled.div`
    padding: 20px;
    border-radius: 13px;
    border: 2px solid ${({ theme }) => theme.colors.lightPurple};
    display: flex;
    align-items: center;
    gap: 50px;
`;

export const PlayerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    width: 180px;

    p {
        font-weight: 500;
        color: ${({ theme }) => theme.colors.dark};
    }
`;

export const UserAvatar = styled.img`
    border-radius: 50%;
    object-fit: cover;
    width: 96px;
    height: 96px;
`;

export const AvatarPlaceholder = styled.div`
    width: 96px;
    height: 96px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.lightPurple};
`;

export const NamePlaceholder = styled.p`
    border-radius: 13px;
    height: 16px;
    position: relative;

    & i {
        opacity: 0;
        animation: dot 1.3s infinite;
        animation-delay: 0s;
    }

    & i + i {
        opacity: 0;
        animation: dot 1.3s infinite;
        animation-delay: 0.2s;
    }

    & i + i + i {
        opacity: 0;
        animation: dot 1.3s infinite;
        animation-delay: 0.3s;
    }

    @keyframes dot {
        0% {
            opacity: 0;
        }

        50% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
`;

export const Vs = styled.p`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
    font-size: 20px;
`;

export const StartGameButton = styled(StyledButton)`
    margin-top: 40px;
    cursor: pointer;
`;

export const Player2Info = styled.p`
    margin-top: 30px;
    color: ${({ theme }) => theme.colors.dark};
    font-weight: 500;
`;
