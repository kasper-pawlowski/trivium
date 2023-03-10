import { useGameCtx } from '@contexts/GameContext';
import fetcher from '@helpers/fetcher';
import React, { useEffect, useState } from 'react';
import { Wrapper } from './Game.styles';
import useSWR from 'swr';
import Loader from '@components/Loader/Loader';

const Game = () => {
    const { selectedCategory } = useGameCtx();
    const { data, error, isLoading } = useSWR(
        `https://opentdb.com/api.php?amount=5&category=${selectedCategory.id}&difficulty=medium&type=multiple`,
        fetcher
    );

    useEffect(() => {
        console.log(data);
    }, [data]);

    if (error) return <div>failed to load</div>;
    if (isLoading)
        return (
            <Wrapper>
                <Loader variant="primary" />
            </Wrapper>
        );

    return <Wrapper>Game</Wrapper>;
};

export default Game;
