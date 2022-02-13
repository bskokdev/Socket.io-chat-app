import { Chat } from "./components/Chat/views";
import { RoomContext } from "./components/RoomForm/context";
import RoomForm from "./components/RoomForm/views/RoomForm";
import io from "socket.io-client";
import { useState } from "react";

// socket.io client; accepts server uri
const socket = io.connect("http://localhost:3001");

function App() {
  const [inRoom, setInRoom] = useState(false);
  // states for inputs
  const [username, setUsername] = useState();
  const [room, setRoom] = useState();
  // emits the room to the server socket
  const joinRoom = () => {
    if (username && room) {
      socket.emit("joinRoom", room);
      setInRoom(true);
    }
  };

  return (
    <RoomContext.Provider value={{ socket, setInRoom }}>
      {/* IF NOT IN ROOM => show join room form */}
      {!inRoom && (
        <RoomForm
          joinRoom={joinRoom}
          setUsername={setUsername}
          setRoom={setRoom}
        />
      )}
      {inRoom && <Chat socket={socket} room={room} username={username} />}
    </RoomContext.Provider>
  );
}

export default App;
