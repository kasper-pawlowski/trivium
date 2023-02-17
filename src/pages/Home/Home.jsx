import React, { useState } from 'react';
import { Wrapper } from './Home.styles';
import CategoryList from '@components/CategoryList/CategoryList';
import Search from '@components/Search/Search';

const Home = () => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <Wrapper>
            <Search setSearchValue={setSearchValue} />
            <CategoryList searchValue={searchValue} />
        </Wrapper>
    );
};

export default Home;
