import React, { useState } from 'react';
import './ContentForm.css';

const ContentForm = ({ onContentCreate }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreate = () => {
    onContentCreate({ title, content });
    setTitle('');
    setContent('');
  };

  const [username, setUsername] = useState('');

  return (
    <div className="form">
      <p>Title</p>
      <input
        type="text"
        placeholder="Hello World"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <p>Content</p>
      <input
        type="text"
        placeholder="Content here"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        onClick={handleCreate}
        disabled={!title || !content}
        className={title && content ? "enabled" : ""}
      >
        Create
      </button>
    </div>
  );
};

export default ContentForm;
