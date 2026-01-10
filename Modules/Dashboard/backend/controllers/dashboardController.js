const User = require("../models/User");

exports.getDashboardStats = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    res.json({
      streak: user.streak,
      studyHours: user.studyHours,
      tasksCompleted: user.tasksCompleted,
      badges: user.badges,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
