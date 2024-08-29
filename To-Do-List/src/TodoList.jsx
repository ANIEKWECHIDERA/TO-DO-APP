import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="list">
      {todos.length === 0 && "No Tasks"}
      {todos.map(({ id, title, completed }) => {
        return (
          <TodoItem
            id={id}
            completed={completed}
            title={title}
            key={id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
