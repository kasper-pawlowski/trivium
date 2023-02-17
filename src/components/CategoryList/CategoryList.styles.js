import styled from 'styled-components';

export const GridWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-gap: 20px;
`;

export const FlexWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
