import React, { useState } from 'react';
import "../../assets/css/components/reply.css";
import useSubmitOnEnter from '../../hooks/UseSubmitEnter';
const ReplyingForm = ({ onSubmit, ReplyRef, onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState('');
  useSubmitOnEnter(onSubmit);

  const handleFileSelection = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type === 'application/pdf' || file.type.startsWith('image/')) {
        setSelectedFile(file);
      } else {
        alert('Veuillez sélectionner un fichier PDF ou une image.');
      }
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  const isSendButtonDisabled = !message.trim() && !selectedFile;

  const handleCloseReply = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div ref={ReplyRef} className="reply-card">
      <div className="reply-header">
        <button className="reply-close-button" onClick={handleCloseReply}>
          <i className="bi bi-x"></i>
        </button>
      </div>
      <form onSubmit={onSubmit}>
        <div className="reply-icons">
          <div
            className={`reply-icon ${selectedFile ? 'disabled' : ''}`}
            onClick={() => !selectedFile && document.getElementById('fileInput').click()}
          >
            <i className="bi bi-file-earmark"></i>
          </div>
          <div
            className={`reply-icon ${selectedFile ? 'disabled' : ''}`}
            onClick={() => !selectedFile && document.getElementById('imageInput').click()}
          >
            <i className="bi bi-image"></i>
          </div>
          <div className="reply-icon">
            <i className="bi bi-three-dots-vertical"></i>
          </div>
        </div>
        {selectedFile && (
          <div className="file-info">
            <span>{selectedFile.name}</span>
            <button type="button" onClick={handleRemoveFile}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        )}
        <div className="input-area">
          <textarea
            value={message}
            rows="1"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tapez votre réponse..."
            required={!selectedFile}
          />
          <button
            type="submit"
            id="sendButton"
            disabled={isSendButtonDisabled}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
        <input type="file" id="fileInput" accept=".pdf,image/*" style={{ display: 'none' }} onChange={handleFileSelection} />
        <input type="file" id="imageInput" accept="image/*" style={{ display: 'none' }} onChange={handleFileSelection} />
      </form>
    </div>
  );
};

export default ReplyingForm;
