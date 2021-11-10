import { combineReducers } from "redux";
import CounterReducer from "./CounterSlide";
import TodoSlide from "./TodoSlide";
const rootReducer =combineReducers({
    counter: CounterReducer,
    todos: TodoSlide,
})
export default rootReducer