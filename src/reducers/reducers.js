export const initialState = {
    testState: "test",
    count: 0
};

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
