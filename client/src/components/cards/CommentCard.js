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
    e.preventDefault();
    console.log(e);
    const newComment = {
      avatar: hero,
      author: "User",
      timestamp: new Date().toLocaleTimeString(),
      text: e.target.elements[0].value,
      replies: [],
    };
    setComments([...comments, newComment]);
   
    e.target.reset();
    
  };

  const toggleReply = (index) => {
    setReplyTo((prevReplyTo) => (prevReplyTo === index ? null : index));
  };

  const handleCloseReply = () => {
    setReplyTo(null);
  };

  const handleReply = (e,index) => {
    e.preventDefault();
   
   
    const replyData={};
    const updatedComments = [...comments];

    if (!Array.isArray(updatedComments[index].replies)) {
      updatedComments[index].replies = [];
    }
    const fileSelected=e.target.elements[3]?.value || e.target.elements[4]?.value;
    console.log(fileSelected);
    updatedComments[index].replies.push({
      avatar:hero, 
      author: "User", 
      timestamp: new Date().toLocaleTimeString(),
      text: e.target.elements[0].value,
      file:fileSelected,
     // file: e.target.elements[3] || e.target.elements[4] ? URL.createObjectURL(e.target.elements[3]|| e.target.elements[4]) : 'file miss selection',
    });

    setComments(updatedComments);
    setReplyTo(null);
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
          <CommentForm onSubmit={(event)=>addComment (event)} />
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
