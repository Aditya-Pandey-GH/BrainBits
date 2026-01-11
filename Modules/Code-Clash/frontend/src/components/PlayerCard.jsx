export default function PlayerCard({ username, score }) {
  return (
    <div>
      <strong>{username}</strong> : {score}
    </div>
  );
}
