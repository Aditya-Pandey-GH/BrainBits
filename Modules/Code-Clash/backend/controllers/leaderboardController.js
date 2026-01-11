const Match = require("../models/Match");

exports.getLeaderboard = async (req, res) => {
  const leaderboard = await Match.aggregate([
    {
      $group: {
        _id: "$winner",
        wins: { $sum: 1 }
      }
    },
    { $sort: { wins: -1 } },
    { $limit: 10 }
  ]);

  res.json(leaderboard);
};
