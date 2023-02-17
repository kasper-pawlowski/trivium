import React from 'react';
import { FlexWrapper, GridWrapper } from './CategoryList.styles';
import useSWR from 'swr';
import formatCategoryName from '@helpers/formatCategoryName';
import CategoryTile from '@components/CategoryTile/CategoryTile';
import Loader from '@components/Loader/Loader';
import NoFound from '@assets/illustrations/noFound.svg';

const CategoryList = ({ searchValue }) => {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error, isLoading } = useSWR('https://opentdb.com/api_category.php', fetcher);

    if (error) return <div>failed to load</div>;
    if (isLoading) return <Loader variant="primary" />;

    const searchCategories = (searchValue) => {
        const filteredCategories = data.trivia_categories.filter((category) => category.name.toLowerCase().includes(searchValue.toLowerCase()));
        if (filteredCategories.length > 0) {
            return filteredCategories;
        } else {
            return null;
        }
    };

    const categories = searchCategories(searchValue);

    return categories ? (
        <GridWrapper>
            {categories.map((category) => (
                <CategoryTile key={category.id} categoryName={formatCategoryName(category.name)} />
            ))}
        </GridWrapper>
    ) : (
        <FlexWrapper>
            <img src={NoFound} alt="" draggable={false} />
        </FlexWrapper>
    );
};

export default CategoryList;
