import React, { useState } from 'react';
import { H1, H2, Logo, Wrapper } from './Home.styles';
import CategoryList from '@components/CategoryList/CategoryList';
import Search from '@components/Search/Search';
import logo from '@assets/triviumLogo.svg';

const Home = ({ searchValue }) => {
    return (
        <Wrapper>
            <Logo src={logo} alt="" draggable={false} />
            <H1>Trivium</H1>
            <H2>Expand your knowledge and play alone or with friends to learn something new every time with Trivium's 4,098 verified questions.</H2>
            <CategoryList searchValue={searchValue} />
        </Wrapper>
    );
};

export default Home;
