import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const CategoryInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
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

export const CategoryName = styled.p`
    color: ${({ theme }) => theme.colors.dark};
    font-size: 22px;
    font-weight: 500;
`;
