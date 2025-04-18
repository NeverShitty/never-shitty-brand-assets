// Agent: leadIntake
module.exports = function handleLead(req) {
  const { source, message } = req;
  return `Lead from ${source}: ${message}`;
};
