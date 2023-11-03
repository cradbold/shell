export const incrementCount = (dispatch, payload) => {
    dispatch({
        type: 'INCREMENT_COUNT',
        payload
    })
};

export const decrementCount = (dispatch, payload) => {
    dispatch({
        type: 'DECREMENT_COUNT',
        payload
    })
};
