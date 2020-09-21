export const addTodo = data => ({
    type: "ADD_TODO",
    data
})

export const fetchTodoList = (todoList) => ({
    type: "FETCH_TODO",
    todoList
})

export const removeList = (data) =>({
    type: "REMOVE_TODO",
    data
})

export const toggleList = (data) =>({
    type: "TOGGLE_TODO",
    data
})

export const allVisble = () =>({
    type: "SHOW_ALL",
})

export const activeVisble = (data) =>({
    type: "SHOW_ACTIVE",
    data
})

export const activeVisble2 = (data) =>({
    type: "SHOW_ACTIVE2",
    data
})

export const completedVisble = () =>({
    type: "SHOW_COMPLETED",
})
// export const setVisibilityFilter = filter =>({
//     type: 'SET_VISIBILITY_FILTER',
//     filter
// })

// export const VisibilityFilters = {
//     SHOW_ALL: 'SHOW_ALL',
//     SHOW_COMPLETED: 'SHOW_COMPLETED',
//     SHOW_ACTIVE: 'SHOW_ACTIVE'
// }