const initalState = (state={ visible: 0, data:[] }, action ) => {
    switch(action.type){
        case 'SHOW_ALL':
            return {
                visible:0
            }
        case 'SHOW_ACTIVE':
            return {
                visible:1
            }
        case 'SHOW_COMPLETED':
            return {
                visible:2
            }

        default:
            return state
    }
}

export default initalState;