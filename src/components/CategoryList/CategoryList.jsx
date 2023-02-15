import React from 'react';
import { Wrapper } from './CategoryList.styles';
import useSWR from 'swr';
import formatCategoryName from '@helpers/formatCategoryName';
import CategoryTile from '@components/CategoryTile/CategoryTile';

const CategoryList = () => {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error, isLoading } = useSWR('https://opentdb.com/api_category.php', fetcher);
    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;

    return (
        <Wrapper>
            {data.trivia_categories.map((category) => (
                <CategoryTile key={category.id} categoryName={formatCategoryName(category.name)} />
            ))}
        </Wrapper>
    );
};

export default CategoryList;
