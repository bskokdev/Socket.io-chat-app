import {
  ChatBody,
  ChatFooter,
  ChatHeader,
  ChatInput,
  ChatMessage,
  ChatWrapper,
  CloseChat,
  SendButton,
} from "./styles";

import { FaTimes } from "react-icons/fa";
import React from "react";
import { useChat } from "../../hooks";

const Chat = ({ socket, username, room }) => {
  const { msgList, setMessageText, sendMessage, closeChat } = useChat(socket);

  return (
    <ChatWrapper>
      {/* HEADER */}
      <ChatHeader>
        Chatting in room: {room}
        <CloseChat>
          <FaTimes onClick={closeChat} />
        </CloseChat>
      </ChatHeader>
      {/* BODY */}
      <ChatBody>
        {msgList.map((msg, idx) => (
          <ChatMessage key={idx}>
            {/* META */}
            <p>{msg.username}: </p>
            {/* TEXT */}
            <p>{msg.messageText}</p>
          </ChatMessage>
        ))}
      </ChatBody>
      {/* Footer */}
      <ChatFooter>
        <ChatInput
          type=" text"
          placeholder="Message.."
          onChange={(e) => setMessageText(e.target.value)}
        />
        <SendButton onClick={() => sendMessage(username, room)}>
          Send
        </SendButton>
      </ChatFooter>
    </ChatWrapper>
  );
};

export default Chat;
