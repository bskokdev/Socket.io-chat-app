import { useContext, useEffect, useState } from "react";

import { RoomContext } from "../../RoomForm/context";

export const useChat = (socket) => {
  const { setInRoom } = useContext(RoomContext);
  const [messageText, setMessageText] = useState();
  const [msgList, setMsgList] = useState([]);

  // on chat render => listen for receiveMessage event coming from server
  // then we store the data to the msgList
  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      setMsgList((msgList) => [...msgList, data]);
    });
  }, [socket]);

  // emitting message to the socket
  const sendMessage = async (username, room) => {
    if (messageText) {
      const messagePayload = {
        room,
        username,
        messageText,
        time: new Date(),
      };
      await socket.emit("sendMessage", messagePayload);
      setMsgList((msgList) => [...msgList, messagePayload]);
    }
  };

  // disconnects from the socket, sets inRoom state to false
  const closeChat = async () => {
    await socket.disconnect();
    setInRoom(false);
  };

  return { msgList, setMessageText, sendMessage, closeChat };
};
