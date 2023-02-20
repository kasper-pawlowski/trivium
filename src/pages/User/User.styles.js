import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Avatar = styled.img`
    border-radius: 50%;
    width: 110px;
    margin-bottom: 30px;
`;

export const DisplayName = styled.p`
    color: ${({ theme }) => theme.colors.dark};
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 10px;
`;

export const Uid = styled.p`
    font-size: 22px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.lightDark};
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    transition-duration: 0.2s;

    p {
        margin-left: 16px;
    }

    &:hover span {
        opacity: 1;
    }

    span {
        transition-duration: 0.2s;
        opacity: 0;
        display: flex;
        align-items: center;
    }
`;
