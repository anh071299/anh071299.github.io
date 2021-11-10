const initState = {
    count : 0,
}
import { COUNT_UP, COUNT_DOWN } from "../action/ActionType"
const CounterReducer=  (state=initState, action) => {
    switch (action.type) {
        case COUNT_UP:{
            return {
                count: state.count + 1,
            }
        }
        case COUNT_DOWN:{
            return {
                count: state.count - 1,
            }
        }
        default:
            return state;
    }
}
export default CounterReducer;