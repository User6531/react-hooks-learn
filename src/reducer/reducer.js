function reducer(state, action) {
    switch (action.type) {
        case 'ADD': 
            return {
                todos: [
                    ...state.todos, {
                        id: Math.floor(Math.random()) + Date.now(),
                        title: action.payloaded,
                        completed: false,
                    }
                ],
                todoTitle: state.todoTitle
            }
        case 'TOGGLE': 
            return {
                todos: state.todos.map(item=>{
                    if (item.id === action.payloaded) {
                        item.completed = !item.completed;
                    }
                    return item;
                }),
                todoTitle: state.todoTitle,
            }
        case 'DELLETE': 
            const newState = [];
            state.todos.map(item=>{
                if (item.id !== action.payloaded) {
                    newState.push(item);
                }
                return item;
            })
            return {
                todos: newState,
                todoTitle: state.todoTitle,
            }
        case 'ADD_TITLE': 
            return {
                todos: state.todos,
                todoTitle: action.payloaded,
            }
        default :
            return state;
    }
}

export default reducer;