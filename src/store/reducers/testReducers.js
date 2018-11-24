const initialState = {
    tasks: []
};

export function testReducer(prevState = initialState, action) {
    //var _tasks = prevState.tasks;
    switch (action.type) {
        case "ADD_TASK":
            return { ...prevState,
                 tasks: [...prevState.tasks, action.info] }

        case "DELETE_TASK":
            return {
                ...prevState,
                info: action.info
            }
        case "COMPLETE_TASK":
            var task =  prevState.tasks[action.index];
            task.done = true;
            return {
                ...prevState,
                tasks: [...prevState.tasks, task]
            }
        default:
            return prevState;
    }
}

