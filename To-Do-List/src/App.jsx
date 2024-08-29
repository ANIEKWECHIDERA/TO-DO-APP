import { useState } from "react";
import "./style.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos((currTodos) => {
      return [
        ...currTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  };

  const toggleTodo = (id, completed) => {
    setTodos((currTodos) => {
      return currTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((currTodos) => {
      return currTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <TodoForm addTodoFunc={addTodo} />
      <h1 className="header">To-do-List</h1>
      <TodoList todos={todos} />
    </>
  );
};

export default App;
