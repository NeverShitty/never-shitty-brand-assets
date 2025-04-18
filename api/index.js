// Express entry point
const express = require('express');
const app = express();
app.use(express.json());

app.get('/status', (req, res) => res.send({ status: 'Genie online.' }));

app.listen(3000, () => console.log('Genie API running on port 3000'));
