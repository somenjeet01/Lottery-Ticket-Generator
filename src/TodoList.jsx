
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function TodoList() {
    let [todos, setTodos] = useState([{ task: "simple task", id: uuidv4(), isdone: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos([...todos, { task: newTodo, id: uuidv4(), isdone: false }]);
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let addDeleteTask = (id) => {
        setTodos((PrevTodos) => todos.filter((PrevTodos) => PrevTodos.id != id));
    }

    let addUpperCaseAllTask = () => {
        setTodos((todo) => (
            todos.map((todo) => {
                return {
                    ...todo, task: todo.task.toUpperCase()
                };
            })
        ))
    };


    let addUpperCaseLetter = (id) => {
        setTodos((todo) => (
            todos.map((todo) => {
                if (id === todo.id) {
                    return {
                        ...todo, task: todo.task.toUpperCase()
                    };
                } else {
                    return todo
                }
            })
        ))
    };


    let addMarkAsDoneTask = (id) => {
        setTodos((todo) => (
            todos.map((todo) => {
                if (id === todo.id) {
                    return {
                        ...todo, isdone: true,
                    };
                } else {
                    return todo
                }
            })
        ))
    };

    let addMarkAsAllDoneTask = () => {
        setTodos((todo) => (
            todos.map((todo) => {
                return {
                    ...todo, isdone: true,
                };
            })
        ))
    };



    return (
        <div>
            <input placeholder="Add a tasks" value={newTodo} onChange={updateTodoValue} />
            <br />
            <br />
            <button onClick={addNewTask}>Add Me</button>
            <br />
            <br />
            <br />
            <br />

            <hr />
            <h4>Todo-Lists</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span style={todo.isdone ? { textDecorationLine: "line-through" } : {}}>{todo.task}</span>
                            &nbsp;
                            &nbsp;
                            <button onClick={() => addDeleteTask(todo.id)} >Delete!</button>
                            <button onClick={() => addUpperCaseLetter(todo.id)}>UpperCase</button>
                            <button onClick={() => addMarkAsDoneTask(todo.id)(todo.isdone)}>Marks as Done</button>
                        </li>
                    ))
                }
            </ul>
            <button onClick={addUpperCaseAllTask}>UpperCase All</button> &nbsp; &nbsp; &nbsp;
            <button onClick={addMarkAsAllDoneTask}>Marks As All Done</button>

        </div>
    );
}

export default TodoList