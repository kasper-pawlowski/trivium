import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`;

export const Title = styled.p`
    color: ${({ theme }) => theme.colors.dark};
    font-size: 18px;
    font-weight: 500;
`;
