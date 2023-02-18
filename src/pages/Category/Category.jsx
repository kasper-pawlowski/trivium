import Loader from '@components/Loader/Loader';
import { useGameCtx } from '@contexts/GameContext';
import formatCategoryName from '@helpers/formatCategoryName';
import getCategoryIcon from '@helpers/getCategoryIcon';
import useCategory from '@hooks/useCategory';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Banner, CategoryName, Icon, IconWrapper, LeftCorner, RightCorner, Wrapper } from './Category.styles';

const Category = () => {
    const { categoryId } = useParams();
    const { selectedCategory } = useGameCtx();

    console.log(selectedCategory);
    return (
        <Wrapper>
            <Banner>
                <IconWrapper>
                    <Icon src={getCategoryIcon(formatCategoryName(selectedCategory.name))} alt="" draggable={false} />
                </IconWrapper>
                <CategoryName>{formatCategoryName(selectedCategory.name)}</CategoryName>
                <LeftCorner />
                <RightCorner />
            </Banner>
        </Wrapper>
    );
};

export default Category;
