import formatTime from "../utils/formatTime";

export default function Timer({ time }) {
  return (
    <h2>⏱ {formatTime(time)}</h2>
  );
}
