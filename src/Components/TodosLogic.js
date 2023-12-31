import InputTodo from './InputTodo';
import TodosList from './TodosList';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

const TodosLogic = () => {
    const [todos, setTodos] = useState([{
        id: uuidv4(),
        title: 'Developmet server is startig',
        completed: true,
    },
    {
        id: uuidv4(),
    title: 'Develop website and add content',
    completed: false,
},
{
      id: uuidv4(),
      title: 'Deploy to live server',
      completed: false,
},
]);
const addTodoItem = (title) => {
    const newTodo = {
        id: uuidv4(),
        title: title,
        completed: false,
    };
    setTodos([...todos, newTodo]);
  };
const delTodo = (id) => {
    setTodos([...todos.filter((todo) => {
        return todo.id !==  id;
    }),
]);
}
const handleChange = (id) => {
    setTodos((prevState) =>
    prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    })
  );
}; 
const setUpdate = (updatedTitle, id) => {
    setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            todo.title = updatedTitle;
          }
          return todo;
        })
      );
  };
return (
    <>
    <InputTodo addTodoItem = {addTodoItem} />
    <TodosList todosProps = {todos} handleChange = {handleChange} delTodo = {delTodo} setUpdate={setUpdate}
 />
    </>
  );
};
export default TodosLogic;