import { useState } from "react";

const TodoForm = (Props) => {
  const [newItem, setNewItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (newItem.trim() === "") return;

    Props.addTodoFunc(newItem);

    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit} className="new-item-form" action="">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
};

export default TodoForm;
