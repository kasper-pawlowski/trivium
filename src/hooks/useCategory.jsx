import fetcher from '@helpers/fetcher';
import useSWR from 'swr';

const useCategory = (categoryId) => {
    const { data, error, isLoading } = useSWR(`https://opentdb.com/api_count.php?category=${categoryId}`, fetcher);

    return {
        category: data,
        isLoading,
        isError: error,
    };
};

export default useCategory;
