import { SearchNormal1 } from 'iconsax-react';
import React from 'react';
import { Input, Wrapper } from './Search.styles';

const Search = ({ setSearchValue }) => {
    return (
        <Wrapper>
            <SearchNormal1 size="16" color="#e4e3f1" variant="Outline" />
            <Input type="text" placeholder="Search quizzes" onChange={(e) => setSearchValue(e.target.value)} />
        </Wrapper>
    );
};

export default Search;
