const runCode = require("./utils/runCode");

const rooms = {};

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("🔌 Client connected:", socket.id);

    // CREATE ROOM
    socket.on("create-room", ({ username }) => {
      const roomCode = Math.random().toString(36).substring(2, 8).toUpperCase();

      rooms[roomCode] = {
        players: [{ id: socket.id, username, score: 0 }],
        time: 300
      };

      socket.join(roomCode);
      socket.emit("room-created", { roomCode });

      console.log(`🏠 Room created: ${roomCode}`);
    });

    // JOIN ROOM
    socket.on("join-room", ({ roomCode, username }) => {
      const room = rooms[roomCode];

      if (!room) {
        socket.emit("error-message", "Room not found");
        return;
      }

      if (room.players.length >= 2) {
        socket.emit("error-message", "Room already full");
        return;
      }

      room.players.push({ id: socket.id, username, score: 0 });
      socket.join(roomCode);

      io.to(roomCode).emit("players", room.players);

      console.log(`👥 Player joined room: ${roomCode}`);

      // START TIMER WHEN BOTH JOIN
      if (room.players.length === 2) {
        const interval = setInterval(() => {
          room.time--;
          io.to(roomCode).emit("timer", room.time);

          if (room.time <= 0) {
            clearInterval(interval);

            const winner = room.players.reduce((a, b) =>
              a.score > b.score ? a : b
            );

            io.to(roomCode).emit("winner", winner);
            console.log(`🏆 Winner in ${roomCode}: ${winner.username}`);
          }
        }, 1000);
      }
    });

    // SUBMIT CODE
    socket.on("submit-code", async ({ roomCode, code }) => {
      const room = rooms[roomCode];
      if (!room) return;

      const testCases = [
        { input: "2\n", output: "4" },
        { input: "3\n", output: "9" }
      ];

      let passed = 0;
      for (const t of testCases) {
        const out = await runCode(code, t.input);
        if (out === t.output) passed++;
      }

      room.players = room.players.map(p =>
        p.id === socket.id ? { ...p, score: passed } : p
      );

      io.to(roomCode).emit("players", room.players);
    });

    socket.on("disconnect", () => {
      console.log("❌ Client disconnected:", socket.id);
    });
  });
};
