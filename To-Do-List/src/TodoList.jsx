import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <ul className="list">
      {todos.length === 0 && "No Tasks"}
      {todos.map(({ id, title, completed }) => {
        return (
          <TodoItem id={id} completed={completed} title={title} key={id} />
        );
      })}
    </ul>
  );
};

export default TodoList;
