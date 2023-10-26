const incrementCount = (state) => {
    return {
        ...state,
        'count': state.count++
    };
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNT':
            return incrementCount(state);
        default:
            return state;
    }
};
