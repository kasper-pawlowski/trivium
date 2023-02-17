import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 20px 20px 30% 20px;
    @media screen and (min-width: 768px) {
        padding: 40px;
    }
`;
