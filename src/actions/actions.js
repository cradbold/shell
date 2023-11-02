export const incrementCount = (payload, dispatch) => {
    dispatch({
        type: 'INCREMENT_COUNT',
        payload
    })
};

export const decrementCount = (payload, dispatch) => {
    dispatch({
        type: 'DECREMENT_COUNT',
        payload
    })
};
