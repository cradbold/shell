import React, { createContext, useReducer } from 'react';
import { initialState, reducer } from "../reducers";

export const Store = createContext(initialState);

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
};