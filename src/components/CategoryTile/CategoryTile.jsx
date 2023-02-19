import { useGameCtx } from '@contexts/GameContext';
import formatCategoryName from '@helpers/formatCategoryName';
import getCategoryIcon from '@helpers/getCategoryIcon';
import React from 'react';
import { CategoryName, Icon, IconWrapper, Wrapper } from './CategoryTile.styles';

const CategoryTile = ({ category }) => {
    const { setSelectedCategory } = useGameCtx();

    return (
        <Wrapper to="/category" onClick={() => setSelectedCategory(category)}>
            <IconWrapper>
                <Icon src={getCategoryIcon(formatCategoryName(category.name))} alt="" draggable={false} />
            </IconWrapper>
            <CategoryName>{formatCategoryName(category.name)}</CategoryName>
        </Wrapper>
    );
};

export default CategoryTile;
