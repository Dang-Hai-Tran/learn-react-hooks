import React from 'react';
import './TodoList.scss';

const TodoList = (props) => {
  const { todoList, handleTodoClick } = props;
  return (
    <ul className="container-todoList">
      {todoList.map((todo) => (
        <li key={`todo${todo.id}`} onClick={() => handleTodoClick(todo)}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
