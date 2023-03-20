import StyledButton from '@components/StyledButton';
import { useGameCtx } from '@contexts/GameContext';
import formatCategoryName from '@helpers/formatCategoryName';
import getCategoryIcon from '@helpers/getCategoryIcon';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { CategoryInfoWrapper, CategoryName, Icon, IconWrapper, Seperator, Wrapper } from './Category.styles';

const Category = () => {
    const { selectedCategory } = useGameCtx();
    const navigate = useNavigate();
    const [gameID, setGameID] = useState();

    useEffect(() => {
        const generateGameId = () => {
            const date = new Date();
            const id = `${date.getFullYear()}${
                date.getMonth() + 1
            }${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}${date.getMilliseconds()}`;
            return id;
        };
        setGameID(generateGameId());
    }, []);

    if (!selectedCategory) return <Navigate to="/" replace={true} />;
    return (
        <Wrapper>
            <CategoryInfoWrapper>
                <IconWrapper>
                    <Icon src={getCategoryIcon(formatCategoryName(selectedCategory.name))} alt="" draggable={false} />
                </IconWrapper>
                <CategoryName>{formatCategoryName(selectedCategory.name)}</CategoryName>
            </CategoryInfoWrapper>
            <StyledButton variant="primary" onClick={() => navigate('/game')}>
                Play solo
            </StyledButton>
            <Seperator>Or</Seperator>
            <StyledButton variant="primary" onClick={() => navigate(`/lobby/${gameID}`)}>
                Challenge a friend
            </StyledButton>
        </Wrapper>
    );
};

export default Category;
