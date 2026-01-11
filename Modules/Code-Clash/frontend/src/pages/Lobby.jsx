import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { socket } from "../socket/socket";
import "../styles/lobby.css";

export default function Lobby() {
  const [username, setUsername] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    socket.on("room-created", ({ roomCode }) => {
      navigate(`/battle/${roomCode}`);
    });

    socket.on("error-message", (msg) => {
      alert(msg);
    });

    return () => {
      socket.off("room-created");
      socket.off("error-message");
    };
  }, [navigate]);

  return (
    <div className="lobby-container">
      <h1>CodeClash</h1>

      <input
        placeholder="Your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button
        onClick={() => socket.emit("create-room", { username })}
        disabled={!username}
      >
        Create Room
      </button>

      <input
        placeholder="Enter Room Code"
        value={roomCode}
        onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
      />

      <button
        onClick={() =>
          socket.emit("join-room", { roomCode, username })
        }
        disabled={!username || !roomCode}
      >
        Join Room
      </button>
    </div>
  );
}
