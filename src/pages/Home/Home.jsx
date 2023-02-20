import React from 'react';
import { AppInfo, Logo, Seperator, TriviumDescription, TriviumTitle, Wrapper } from './Home.styles';
import CategoryList from '@components/CategoryList/CategoryList';
import logo from '@assets/triviumLogo.svg';

const Home = ({ searchValue }) => {
    return (
        <Wrapper>
            <AppInfo>
                <Logo src={logo} alt="" draggable={false} />
                <TriviumTitle>Trivium</TriviumTitle>
                <TriviumDescription>
                    Expand your knowledge and play alone or with friends to learn something new every time with Trivium's 4,098 verified questions.
                </TriviumDescription>
            </AppInfo>
            <Seperator />
            <CategoryList searchValue={searchValue} />
        </Wrapper>
    );
};

export default Home;
