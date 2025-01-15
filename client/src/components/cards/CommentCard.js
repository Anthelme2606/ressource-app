import React, { useState, useRef } from "react";
import CommentForm from "../forms/CommentForm";
import "../../assets/css/components/cards/comment-card.css";
import Comment from "../Comment";
import hero from "../../assets/images/hero.png";
import useOutsideClick from "../../hooks/useOutsideClick";
import ReplyingForm from "../forms/ReplyingForm";

const CommentCard = ({ openComment }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [message, setMessage] = useState(''); // état pour le message
  const [replyTo, setReplyTo] = useState(null); // Stocker l'index du commentaire pour lequel une réponse est ouverte
  const cardRef = useRef(null);
  const replyRef = useRef(null);

  const toggleCard = () => setIsOpen(!isOpen);

  React.useEffect(() => {
    if (openComment) {
      openComment(toggleCard);
    }
  }, [openComment]);

  useOutsideClick(cardRef, isOpen, () => setIsOpen(false));



  const addComment = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire

    if (message.trim()) {
      const newComment = {
        avatar: hero,
        author: 'User',
        timestamp: new Date().toLocaleTimeString(),
        text: message,
        replies: [],
      };
      setComments([...comments, newComment]);
      setMessage(''); // Réinitialise le champ de message
    }
  };

  const toggleReply = (index) => {
    setReplyTo((prevReplyTo) => (prevReplyTo === index ? null : index));
  };

  const handleCloseReply = () => {
    setReplyTo(null);
  };

  const handleReply = (e, index) => {
    e.preventDefault();
    
    const updatedComments = [...comments];
    const replyData = {
      avatar: hero,
      author: "User",
      timestamp: new Date().toLocaleTimeString(),
    };
  
    // Si les réponses n'existent pas encore, initialisez-les
    if (!Array.isArray(updatedComments[index].replies)) {
      updatedComments[index].replies = [];
    }
  
    // Récupérez les éléments du formulaire explicitement
    const textElement = e.target.querySelector('textarea'); // Récupère le message depuis le textarea
    const fileInput1 = e.target.querySelector('#fileInput'); // Récupère le fichier 1
    const fileInput2 = e.target.querySelector('#imageInput'); // Récupère le fichier 2
    
    const fileSelected = (fileInput1 && fileInput1.files[0]) || (fileInput2 && fileInput2.files[0]); // Sélectionne un fichier
    
    updatedComments[index].replies.push({
      ...replyData,
      text: textElement ? textElement.value : '', // Récupère le texte du textarea
      file: fileSelected ? fileSelected.name : '', // Si un fichier est sélectionné, récupère son nom
    });
  
    setComments(updatedComments);
    setReplyTo(null); // Réinitialise la réponse en cours
  };
  

  return (
    <div
      ref={cardRef}
      className={`comment-card bg-white ${isOpen ? "open" : ""}`}
    >
      <div className="card-content mb-0">
        <header className="card-header mb-0">
          <h2 className="card-title">Commentaires</h2>
          <button className="close-button" onClick={toggleCard}>
            <i className="bi bi-x"></i>
          </button>
        </header>
        <div className="comments-container">
          <div className="comments-area">
            {comments.map((comment, index) => (
              <div key={index}>
                <Comment {...comment} onReply={() => toggleReply(index)} />

                {replyTo === index && (
                  <div style={{ marginLeft: "20px" }}>
                    <ReplyingForm
                      replyRef={replyRef}
                      onClose={handleCloseReply}
                      onSubmit={(event)=> handleReply(event,index)}
                    />
                  </div>
                )}

                {comment.replies.map((reply, replyIndex) => (
                  <div
                    key={replyIndex}
                    style={{
                      marginLeft: "20px",
                      borderBottom: "1px solid #ddd",
                      padding: "10px",
                    }}
                  >
                    {/* <pre className="track-text">
                      {JSON.stringify(reply, null, 2)}
                    </pre> */}

                    <div className="reply-item">
                      <Comment {...reply}  onReply={() => toggleReply(index)} />
                      {reply.file && (
                        <div className="reply-file">
                          {reply.file.endsWith(".pdf") ? (
                            <a
                              href={reply.file}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Télécharger le PDF
                            </a>
                          ) : (
                            <img
                              src={reply.file}
                              alt="Fichier joint"
                              style={{ maxWidth: "100px", maxHeight: "100px" }}
                            />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="comment-form-container">
        <CommentForm 
        onSubmit={addComment} 
        message={message} 
        setMessage={setMessage} 
      />
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
