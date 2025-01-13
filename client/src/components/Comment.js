const Comment = ({ avatar, author, timestamp, text, onReply }) => (
    <div className="comment" onClick={onReply}>
      <img src={avatar} alt={`${author}'s avatar`} className="comment-avatar" />
      <div className="comment-content">
        <div className="comment-header">
          <span className="comment-author text-black">{author}</span>
          <span className="comment-timestamp">{timestamp}</span>
        </div>
        <p className="comment-text">{text}</p>
      </div>
    </div>
  );
  export default Comment;