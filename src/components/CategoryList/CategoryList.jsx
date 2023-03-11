import React from 'react';
import { FlexWrapper, GridWrapper } from './CategoryList.styles';
import useSWR from 'swr';
import CategoryTile from '@components/CategoryTile/CategoryTile';
import Loader from '@components/Loader/Loader';
import noFound from '@assets/illustrations/noFound.svg';
import fetcher from '@helpers/fetcher';

const CategoryList = ({ searchValue }) => {
    const { data, isError, isLoading } = useSWR('https://opentdb.com/api_category.php', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    if (isError) return <div>failed to load</div>;
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
                <CategoryTile key={category.id} category={category} />
            ))}
        </GridWrapper>
    ) : (
        <FlexWrapper>
            <img src={noFound} alt="" draggable={false} />
        </FlexWrapper>
    );
};

export default CategoryList;
