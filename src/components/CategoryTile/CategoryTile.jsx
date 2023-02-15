import React from 'react';
import { CategoryName, Icon, IconWrapper, Wrapper } from './CategoryTile.styles';

const CategoryTile = ({ categoryName }) => {
    const iconUrl = () => {
        const path = new URL(`@assets/icons/`, import.meta.url).href;
        return `${path}/${categoryName}.svg`;
    };
    // zamiast dynamicznego ladowania ikon trzeba zrobic to zstatycznie

    return (
        <Wrapper>
            <IconWrapper>
                <Icon src={iconUrl()} alt="" />
            </IconWrapper>
            <CategoryName>{categoryName}</CategoryName>
        </Wrapper>
    );
};

export default CategoryTile;
