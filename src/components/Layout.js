import styled from 'styled-components';

export const Layout = styled.div`
    height: 100dvh;
    display: flex;
    flex-direction: column;
`;

export const LayoutContent = styled.div`
    flex: 1;
    display: flex;
    margin: 0 14px 14px 14px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 13px;
    color: ${({ theme }) => theme.colors.dark};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 80px;
    }
`;
