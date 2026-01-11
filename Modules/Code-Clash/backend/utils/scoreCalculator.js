module.exports = (passed, total) => {
  return Math.round((passed / total) * 100);
};
