import { ADD_TO_DO, DELETE_TO_DO } from "../action/ActionType";
const initState = {
    todos: [],
    id: 1,
}
export default (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_DO: {
            return {
                todos: [
                    ...state.todos,
                    {
                        id: state.id,
                        title: action.payload,
                    }
                ],
                id: state.id + 1,
            }
        }
        case DELETE_TO_DO: {
            return {
                ...state,
                todos: state.todos.filter((t) => t.id != action.payload),
            }
        }
        default:
            return state;
    }
}