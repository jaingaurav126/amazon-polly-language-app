const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
const comprehend = new AWS.Comprehend({ region: process.env.AWS_REGION });

router.post('/', async (req, res) => {
    const { user_id, user_text } = req.body;

    try {
        const response = await comprehend.detectSentiment({
            Text: user_text,
            LanguageCode: 'en'
        }).promise();

        res.json({ sentiment: response.Sentiment });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
