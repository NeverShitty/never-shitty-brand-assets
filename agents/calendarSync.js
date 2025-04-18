// Agent: calendarSync
module.exports = function syncCalendar(unitId, dates) {
  return `Synced ${unitId} to ${dates.length} calendar events.`;
};
