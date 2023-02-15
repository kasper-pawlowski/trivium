import React from 'react';
import { Wrapper } from './Home.styles';
import CategoryList from '@components/CategoryList/CategoryList';

const Home = () => {
    return (
        <Wrapper>
            <CategoryList />
        </Wrapper>
    );
};

export default Home;
