import getCategoryIcon from '@helpers/getCategoryIcon';
import React from 'react';
import { CategoryName, Icon, IconWrapper, Wrapper } from './CategoryTile.styles';

const CategoryTile = ({ categoryName }) => {
    return (
        <Wrapper>
            <IconWrapper>
                <Icon src={getCategoryIcon(categoryName)} alt="" />
            </IconWrapper>
            <CategoryName>{categoryName}</CategoryName>
        </Wrapper>
    );
};

export default CategoryTile;
