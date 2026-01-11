import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { socket } from "../socket/socket";
import CodeEditor from "../components/CodeEditor";
import Timer from "../components/Timer";

export default function Battle() {
  const { roomId } = useParams();
  const [players, setPlayers] = useState([]);
  const [time, setTime] = useState(300);
  const [code, setCode] = useState("");

  useEffect(() => {
    socket.on("players", setPlayers);
    socket.on("timer", setTime);

    return () => {
      socket.off("players");
      socket.off("timer");
    };
  }, []);

  return (
    <div className="battle-container">
      <Timer time={time} />

      <CodeEditor code={code} setCode={setCode} />

      <button
        onClick={() =>
          socket.emit("submit-code", { roomCode: roomId, code })
        }
      >
        Submit
      </button>

      <h3>Scores</h3>
      {players.map(p => (
        <p key={p.id}>{p.username}: {p.score}</p>
      ))}
    </div>
  );
}
