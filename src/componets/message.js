import React, { useState } from "react";

const MessageBox = () => {
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessageDisplay = () => {
    setShowMessage(!showMessage);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setShowMessage(true);
    }
  };

  return (
    <div className="message-box-container">
      {showMessage &&
        ((
          <div className="message-box">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        ) || (
          <div className="message-display">
            <p>{message}</p>
          </div>
        ))}

      <div className="icon">
        <img
          onClick={toggleMessageDisplay}
          src="img/galary/icon.png"
          title="Message Us"
          alt="MSicon"
        />
      </div>
    </div>
  );
};

export default MessageBox;
