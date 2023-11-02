const incrementCount = (state) => {
    return {
        ...state,
        'count': state.count++
    };
};

const decrementCount = (state) => {
    return {
        ...state,
        'count': state.count--
    };
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNT':
            return incrementCount(state);
        case 'DECREMENT_COUNT':
            return decrementCount(state);
        default:
            return state;
    }
};
