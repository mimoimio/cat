'use client';

import { useEffect, useState } from 'react';

const Page = () => {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');

  const fetchTodos = async () => {
    const res = await fetch('/api/todos');
    const data = await res.json();
    if (res.ok) {
      setTodos(data);
    } else {
      console.error('Failed to fetch todos:', data.error);
    }
  };

  const addTodo = async () => {
    const res = await fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task: newTask }),
    });
    const newTodo = await res.json();
    if (res.ok) {
      setTodos([...todos, newTodo]);
      setNewTask('');
    } else {
      console.error('Failed to add todo:', newTodo.error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="Add a new task" 
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
