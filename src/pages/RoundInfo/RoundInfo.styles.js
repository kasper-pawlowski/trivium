import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`;

export const IconWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.lightPurple2};
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

export const Title = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.dark};
`;
