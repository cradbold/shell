const addTodo = (state, todoText) => {
    const newTodo = {
        id:
            (state.todoList.length > 0 && state.todoList[state.todoList.length - 1].id + 1) ||
            0,
        text: todoText,
        tag: 'active',
    };

    return { ...state, todoList: [...state.todoList, newTodo] };
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return addTodo(state, action.todoText);
        default:
            return state;
    }
};
