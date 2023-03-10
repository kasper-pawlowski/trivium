import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
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

export const Seperator = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.dark};
    position: relative;

    &::before {
        position: absolute;
        content: '';
        width: 100px;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.gray};
        top: 50%;
        transform: translateY(-50%);
        left: -110px;
    }

    &::after {
        position: absolute;
        content: '';
        width: 100px;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.gray};
        top: 50%;
        transform: translateY(-50%);
        right: -110px;
    }
`;
