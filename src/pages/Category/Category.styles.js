import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Banner = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background-color: ${({ theme }) => theme.colors.primary};
    position: relative;
    padding: 0 10% 30px 10%;
    @media screen and (max-width: 768px) {
        padding: 0 0 30px 0;
    }
`;

export const IconWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 26px;
`;

export const Icon = styled.img`
    width: 50px;
    height: 50px;
`;

export const CategoryName = styled.p`
    color: ${({ theme }) => theme.colors.white};
    font-size: 22px;
    font-weight: 500;
`;

export const LeftCorner = styled.div`
    width: 13px;
    height: 13px;
    position: absolute;
    bottom: -13px;
    left: 0px;
    background-color: ${({ theme }) => theme.colors.primary};
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-top-left-radius: 13px;
        background-color: ${({ theme }) => theme.colors.white};
    }
`;

export const RightCorner = styled.div`
    width: 13px;
    height: 13px;
    position: absolute;
    bottom: -13px;
    right: 0px;

    background-color: ${({ theme }) => theme.colors.primary};
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-top-right-radius: 13px;
        background-color: ${({ theme }) => theme.colors.white};
    }
`;
