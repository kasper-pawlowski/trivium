import StyledButton from '@components/StyledButton';
import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    padding: 20px;
    border-radius: 13px;
    border: 2px solid ${({ theme }) => theme.colors.lightPurple};
    background-color: ${({ theme }) => theme.colors.white};
    gap: 20px;
`;

export const LeftContainer = styled.div``;

export const Avatar = styled.img`
    border-radius: 50%;
    width: 40px;
`;

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Message = styled.p`
    a {
        font-weight: 500;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const Time = styled.p`
    font-weight: 300;
    font-size: 14px;
    margin-top: 6px;
    color: ${({ theme }) => theme.colors.gray};
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 16px;
`;

export const Button = styled(StyledButton)`
    padding: 12px 16px;
    font-weight: 500;
    font-size: 14px;
    flex: 1;
`;
