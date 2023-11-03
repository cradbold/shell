export const initialState = {
    testState: "test",
    count: 0
};

// START OF ACTIONS
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
// END OF ACTIONS

export const reducer = (state=initialState, action) => {
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
