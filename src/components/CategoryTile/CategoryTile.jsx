import React from 'react';
import { CategoryName, Icon, IconWrapper, Wrapper } from './CategoryTile.styles';
// import from '@assets/icons/General Knowledge.svg';

const CategoryTile = ({ categoryName }) => {
    const imgUrl = () => {
        const path = new URL(`@assets/icons/`, import.meta.url).href;
        return `${path}/${categoryName}.svg`;
    };

    return (
        <Wrapper>
            <IconWrapper>
                <Icon src={imgUrl()} alt="" />
            </IconWrapper>
            <CategoryName>{categoryName}</CategoryName>
        </Wrapper>
    );
};

export default CategoryTile;
