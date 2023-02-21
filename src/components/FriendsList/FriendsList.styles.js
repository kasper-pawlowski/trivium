import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding-left: 14%;
    padding-right: 14%;
`;

export const Title = styled.p`
    color: ${({ theme }) => theme.colors.dark};
    font-size: 18px;
    font-weight: 500;
`;

export const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(0px, 1fr));
    grid-gap: 20px;
`;
