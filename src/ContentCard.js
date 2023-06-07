import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';


const ContentCard = ({ title, content, username, onEdit, onDelete }) => {
    return (
      <div className="content-card">
        <h3>{title}</h3>
        <p>{content}</p>
        <p>Username: {username}</p> {/* Exibe o username */}
        <div className="card-actions">
          <button onClick={onEdit}><FaEdit /></button>
          <button onClick={onDelete}><FaTrash /></button>
        </div>
      </div>
    );
  };

export default ContentCard;
