import { postFetcher } from "../helpers/fetcher";
import useSWR from 'swr';
import { useMemo } from 'react';
import { endpoints } from "../helpers/endpoints";





export function useSearchLayout(query) {

    const body = {
        id: query
    }
    const { data, error, isValidating } = useSWR({ url: endpoints.layout, body }, postFetcher);

    const memoizedValue = useMemo(
        () => ({
            data: data,
            error,
            loading: isValidating
        }),
        [data, error, isValidating]
    );

    return memoizedValue
}