import React from 'react';
import { Icon, Input, Wrapper } from './Search.styles';

const Search = ({ setSearchValue }) => {
    return (
        <Wrapper>
            <Icon />
            <Input type="text" placeholder="Search quizzes" onChange={(e) => setSearchValue(e.target.value)} />
        </Wrapper>
    );
};

export default Search;
