export const incrementCount = (payload, dispatch) => {
    dispatch({
        type: 'INCREMENT_COUNT',
        payload
    })
};
