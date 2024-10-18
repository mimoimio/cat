// app/page.jsx
'use client'
import React, { useState } from 'react';

const HomePage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTodo = async () => {
  };

  return (
    <div>
      <h1>Create a Todo</h1>
      <div>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // Update title state
            required
          />
        </label>
      </div>
      <div>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)} // Update description state
            required
          />
        </label>
      </div>
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default HomePage;
