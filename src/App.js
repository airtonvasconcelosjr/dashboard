import React, { useState } from 'react';
import LoginModal from './LoginModal';
import ContentForm from './ContentForm';
import ContentCard from './ContentCard';
import './index.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [contents, setContents] = useState([]);

  const handleLogin = (username) => {
    setLoggedIn(true);
    setUsername(username);
  };

  const handleContentCreate = (newContent) => {
    const newCard = {
      ...newContent,
      username: username, // Adicione o username ao card
    };
    setContents([...contents, newCard]);
  };

  const handleContentEdit = (title, content) => {
    // Implementar a edição do conteúdo
  };

  const handleContentDelete = (title) => {
    // Implementar a exclusão do conteúdo
  };

  const [initialUsername, setInitialUsername] = useState('');

const handleInitialUsernameChange = (e) => {
  setInitialUsername(e.target.value);
};

  return (
    <div>
      {!loggedIn && <LoginModal onLogin={handleLogin} />}
      {loggedIn && (
        <div className="container">
          <h1>What’s on your mind?</h1>
          <ContentForm onContentCreate={handleContentCreate} />
          {contents.map((content, index) => (
            <ContentCard
              key={index}
              title={content.title}
              content={content.content}
              username={content.username} // Passe o valor do username para o card
              onEdit={handleContentEdit}
              onDelete={handleContentDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
