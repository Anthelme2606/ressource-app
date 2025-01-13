import React from 'react';
import "../assets/css/components/file.css";


const FileCard = ({ title, description, fileSize, date, onOpen, onPreview, onDownload }) => {
    return (
        <div className="pdf-card">
            <div className="pdf-preview" onClick={onOpen}>
                <div className="pdf-content">
                    <div className="pdf-lines">
                        <div className="pdf-line"></div>
                        <div className="pdf-line"></div>
                        <div className="pdf-line"></div>
                    </div>
                </div>
            </div>
            <div className="card-content">
                <div>
                    <h2 className="card-title our-text ">{title}</h2>
                    <p className="card-description">{description}</p>
                </div>
                <div className="card-meta">
                    <span className='our-text'>📄 {fileSize}</span>
                    <span className='our-text'>{date}</span>
                </div>
                <div className="card-actions">
                    <button className="btn btn-outline our-text" onClick={onPreview}>👁️ </button>
                    <button className="btn btn-primary" onClick={onDownload}><i className='bi bi-download'></i> Télécharger</button>
                </div>
            </div>
        </div>
    );
};

export default FileCard;
