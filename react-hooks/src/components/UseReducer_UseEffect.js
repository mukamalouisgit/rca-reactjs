import React, { useReducer, useEffect } from 'react';

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    data: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return { ...state, isLoading: true, isError: false, isSuccess: false, data: null };
        case 'FETCH_SUCCESS':
            return { ...state, isLoading: false, isError: false, isSuccess: true, data: action.payload };
        case 'FETCH_ERROR':
            return { ...state, isLoading: false, isError: true, isSuccess: false, data: null };
        default:
            return state;
    }
};

const fetchData = async () => {
    // Simulate an API call
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
};

const DataFetcher = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const fetchApiData = async () => {
            try {
                dispatch({ type: 'FETCH_START' });
                const data = await fetchData();
                dispatch({ type: 'FETCH_SUCCESS', payload: data });
            } catch (error) {
                dispatch({ type: 'FETCH_ERROR' });
            }
        };
        fetchApiData();
    }, []);

    if (state.isLoading) {
        return <div>Loading...</div>;
    }

    if (state.isError) {
        return <div>Error while fetching data</div>;
    }

    if (state.isSuccess) {
        return (
            <div>
                <h1>{state.data.title}</h1>
                <p>{state.data.body}</p>
            </div>
        );
    }

    return null;
};

export default DataFetcher;
