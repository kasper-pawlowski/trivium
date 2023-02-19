import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.gray};
`;

export const Banner = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background-color: ${({ theme }) => theme.colors.primary};
    position: relative;
    padding: 0 10% 30px 10%;
    @media screen and (max-width: 768px) {
        padding: 0 0 30px 0;
    }
`;

export const SearchFriendsTitle = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};
`;

export const SearchUidWrapper = styled.div`
    display: flex;
    gap: 10px;
`;

export const SearchUiButton = styled.button`
    padding: 9px 14px;
    border: none;
    border-radius: 13px;
    background-color: ${({ theme }) => theme.colors.lightPrimary};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    font-size: 13px;
`;

export const SearchUidInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.lightPrimary};
    border-radius: 13px;
    transition-duration: 0.2s;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const SearchUidLabel = styled.div`
    background-color: #9182f3;
    padding: 9px 14px;
    border-bottom-left-radius: 13px;
    border-top-left-radius: 13px;
    color: ${({ theme }) => theme.colors.white};
`;

export const Input = styled.input`
    padding: 9px 14px;
    width: 70px;
    font-size: 15px;
    font-weight: 400;
    background: none;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.white};

    &::placeholder {
        color: ${({ theme }) => theme.colors.lightPurple};
        font-weight: 400;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    &[type='number'] {
        -moz-appearance: textfield;
    }
`;
