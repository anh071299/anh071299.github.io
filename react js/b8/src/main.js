import store from './store'
import { ADD_TO_DO, COUNT_DOWN, COUNT_UP, DELETE_TO_DO } from './action/ActionType';

const count = document.getElementById('count');
const inc = document.getElementById('increment');
const des = document.getElementById('decrement');
console.log(store.getState())
store.subscribe(renderCounter);
store.subscribe(renderTodo);
function renderCounter() {
    const { counter } = store.getState();
    count.textContent = counter.count;
}
renderCounter();
const list = document.getElementById('list');
const todoForm = document.getElementById('todoForm');
todoForm.onsubmit = (e) => {
    e.preventDefault();
    const task = todoForm.elements.task;
    console.log(task)
    store.dispatch({
        type: ADD_TO_DO,
        payload: task.value,
    })
}

function renderTodo() {
    const { todos } = store.getState();
    list.innerHTML = "";
    for (let t of todos.todos) {
        const li = document.createElement("li");
        li.append(t.title);
        const button = document.createElement("button");
        button.onclick = () => {
            store.dispatch(
                {
                    type: DELETE_TO_DO,
                    payload: t.id,
                }
            )
        }
        button.textContent = 'Delete';
        li.append(button);
     
        list.append(li);
    }
}

renderTodo()
inc.onclick = () => store.dispatch({ type: COUNT_UP });
des.onclick = () => store.dispatch({ type: COUNT_DOWN });

