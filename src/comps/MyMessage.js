import React from "react";

const MessageForm = ({ message }) => {
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }
  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "black",
        backgroundColor: "#e3ec40",
      }}
    >
      {message.text}
    </div>
  );
};

export default MessageForm;
