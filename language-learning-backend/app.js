require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const analyzeRoute = require('./routes/analyze');
const audioRoute = require('./routes/audio');
const progressRoute = require('./routes/progress');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/analyze', analyzeRoute);
app.use('/audio', audioRoute);
app.use('/progress', progressRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
