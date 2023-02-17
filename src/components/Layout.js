import styled from 'styled-components';

export const Layout = styled.div`
    height: 100dvh;
    display: flex;
    flex-direction: column;
`;

export const LayoutContent = styled.div`
    flex: 1;
    display: flex;
    margin: 56px 14px 14px 14px;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.dark};

    @media screen and (min-width: 768px) {
        padding: 0 10%;
    }
`;

export const BottomLabel = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 14px;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const LeftCorner = styled.div`
    width: 13px;
    height: 13px;
    position: fixed;
    bottom: 14px;
    left: 14px;
    background-color: ${({ theme }) => theme.colors.primary};
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-bottom-left-radius: 13px;
        background-color: ${({ theme }) => theme.colors.white};
    }
`;

export const RightCorner = styled.div`
    width: 13px;
    height: 13px;
    position: fixed;
    bottom: 14px;
    right: 14px;

    background-color: ${({ theme }) => theme.colors.primary};
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-bottom-right-radius: 13px;
        background-color: ${({ theme }) => theme.colors.white};
    }
`;
