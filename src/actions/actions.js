export const incrementCount = (count, dispatch) => {
    dispatch({
        type: 'INCREMENT_COUNT',
        count
    })
};
