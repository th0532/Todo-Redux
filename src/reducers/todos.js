const todos = (state = [], action) =>{
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.data.id,
                    isCompleted: false,
                    text:action.data.text,
                }
            ]
        case 'FETCH_TODO':
            return [
                ...state,
                ...action.todoList
            ]
        case 'REMOVE_TODO':
            return state.filter(todo=>
                todo.id !== action.data.id 
            )
        case 'TOGGLE_TODO':
            return state.map(
                todo=> todo.id === action.data.id ? {...todo, isCompleted:!todo.isCompleted} : todo
            )
        // case 'ALL_LIST':
        //     return [
        //         ...state
        //     ]
        case 'SHOW_ACTIVE2':
                return [
                    action.data
                ]
        // case 'COMPLETED_LIST':
        //     return [
        //         ...state.filter(todo=>
        //             todo.isCompleted !== false 
        //         )
        //     ]

        default:
            return state;
    }
}

export default todos;
