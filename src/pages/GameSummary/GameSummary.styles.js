import styled from 'styled-components';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`;

export const Title = styled.p`
    font-weight: 600;
    font-size: 28px;
    color: ${({ theme }) => theme.colors.dark};
    /* margin-bottom: 20px; */
`;

export const TrophyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-color: ${({ theme }) => theme.colors.lightGreen}; */
    border-radius: 13px;
    padding: 20px;
    gap: 30px;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 20px;
    }
`;

export const Trophy = styled.img`
    object-fit: cover;
    max-width: 120px;
`;

export const PointsInfo = styled.p`
    font-weight: 500;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.dark};
`;

export const ProgressWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    p {
        color: ${({ theme }) => theme.colors.dark};
        font-weight: 500;
        font-size: 20px;
    }
`;

export const StyledCircularProgressbarWithChildren = styled(CircularProgressbarWithChildren)`
    width: 80px;
    height: 80px;
`;

export const StyledJsxInProgressbar = styled.p`
    font-size: 24px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};

    span {
        font-size: 16px;
        font-weight: 300;
    }
`;
