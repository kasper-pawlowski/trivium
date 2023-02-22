import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    @media screen and (min-width: 1000px) {
        padding: 0 10%;
    }
    @media screen and (min-width: 1400px) {
        padding: 0 16%;
    }
`;

export const Title = styled.p`
    color: ${({ theme }) => theme.colors.dark};
    font-size: 18px;
    font-weight: 500;
`;

export const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(2, minmax(0px, 1fr));
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0px, 1fr));
    }
`;
