export const addTodo = (todo, dispatch) => {
    dispatch({
        type: 'ADD_TODO',
        todoText: todo,
    })
};
