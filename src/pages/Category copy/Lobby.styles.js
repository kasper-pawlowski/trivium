import styled from 'styled-components';
import { QRCodeSVG } from 'qrcode.react';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 50px;
    padding-top: 10%;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
        padding-top: 0;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        margin-bottom: 50px;
        color: ${({ theme }) => theme.colors.lightDark};
        text-align: center;
    }
`;

export const Or = styled.p`
    color: ${({ theme }) => theme.colors.lightDark};
    padding-top: 18%;
    font-weight: 500;
`;

export const Title = styled.p`
    font-weight: 600;
    color: ${({ theme }) => theme.colors.dark};
    font-size: 30px;
    margin-bottom: 10px;
    @media screen and (max-width: 768px) {
        display: ${({ isVisibleOnMobile }) => !isVisibleOnMobile && 'none'};
    }
`;

export const StyledQRCodeSVG = styled(QRCodeSVG)`
    width: 300px;
    height: 300px;
    padding: 13px;
    border: 2px solid ${({ theme }) => theme.colors.lightPurple};
    border-radius: 13px;

    @media screen and (max-width: 768px) {
        width: 70%;
        height: auto;
    }
`;

export const GameIDWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 70px;

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

export const Info = styled.p`
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 100px;
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.dark};
`;
