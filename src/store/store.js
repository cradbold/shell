import React, { createContext, useReducer } from 'react';

const initialState = {
    testState: "test",
    count: 0
};

export const actions = {
    incrementCount: (dispatch, payload) => {
        dispatch({
            type: 'INCREMENT_COUNT',
            payload
        })
    },
    decrementCount: (dispatch, payload) => {
        dispatch({
            type: 'DECREMENT_COUNT',
            payload
        })
    }
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNT':
            return {
                ...state,
                'count': state.count++
            };
        case 'DECREMENT_COUNT':
            return {
                ...state,
                'count': state.count--
            };
        default:
            console.log(`Unknown action type: ${action.type}`);
            return state;
    }
};


export const Store = createContext(initialState);

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
};
