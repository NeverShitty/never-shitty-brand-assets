// Webhook handler for HubSpot form submits
module.exports = function handleHubSpot(req, res) {
  const leadData = req.body;
  console.log("🚀 HubSpot Webhook:", leadData);
  res.status(200).send("Received HubSpot lead.");
};
