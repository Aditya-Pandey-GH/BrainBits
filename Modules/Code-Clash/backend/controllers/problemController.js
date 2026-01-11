const Problem = require("../models/Problem");

exports.getAllProblems = async (req, res) => {
  const problems = await Problem.find({}, "title difficulty");
  res.json(problems);
};

exports.getProblemById = async (req, res) => {
  const problem = await Problem.findById(req.params.id);

  if (!problem) {
    return res.status(404).json({ message: "Problem not found" });
  }

  res.json(problem);
};
