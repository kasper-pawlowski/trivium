import React from 'react';
import { Wrapper } from './Home.styles';
import useSWR from 'swr';

const Home = () => {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error, isLoading } = useSWR('https://opentdb.com/api_category.php', fetcher);
    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;

    function formatCategoryName(name) {
        const prefix = ['Entertainment: ', 'Science: '];
        for (const p of prefix) {
            if (name.startsWith(p)) {
                return name.substring(p.length);
            }
        }
        return name;
    }

    console.log(data.trivia_categories);
    return (
        <Wrapper>
            {data.trivia_categories.map((category) => (
                <div key={category.id}> {formatCategoryName(category.name)}</div>
            ))}
        </Wrapper>
    );
};

export default Home;
