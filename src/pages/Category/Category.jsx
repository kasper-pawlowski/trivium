import StyledButton from '@components/StyledButton';
import { useGameCtx } from '@contexts/GameContext';
import formatCategoryName from '@helpers/formatCategoryName';
import getCategoryIcon from '@helpers/getCategoryIcon';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { CategoryInfoWrapper, CategoryName, Icon, IconWrapper, Wrapper } from './Category.styles';

const Category = () => {
    const { selectedCategory } = useGameCtx();

    if (!selectedCategory) return <Navigate to="/" replace={true} />;
    return (
        <Wrapper>
            <CategoryInfoWrapper>
                <IconWrapper>
                    <Icon src={getCategoryIcon(formatCategoryName(selectedCategory.name))} alt="" draggable={false} />
                </IconWrapper>
                <CategoryName>{formatCategoryName(selectedCategory.name)}</CategoryName>
            </CategoryInfoWrapper>
            {/* <StyledButton variant="primary">Play</StyledButton> */}
        </Wrapper>
    );
};

export default Category;
