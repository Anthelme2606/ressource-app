import React, { useState } from 'react';

const CommentForm = ({ onSubmit }) => {
  const [message, setMessage] = useState(''); 
  const isSendButtonDisabled = !message.trim(); // Désactive le bouton si le champ est vide.

  

  return (
    <form className="comment-form" onSubmit={onSubmit}>
      <div className="textarea-container">
        <textarea
          placeholder="Écrivez votre commentaire..."
          rows="1"
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
        ></textarea>
        <button 
          type="submit" 
          disabled={isSendButtonDisabled}
          className="send-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
