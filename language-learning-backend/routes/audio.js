const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
const polly = new AWS.Polly({ region: process.env.AWS_REGION });

router.post('/', async (req, res) => {
    const { text_to_speak } = req.body;

    try {
        const response = await polly.synthesizeSpeech({
            Text: text_to_speak,
            OutputFormat: 'mp3',
            VoiceId: 'Joanna'
        }).promise();

        res.set({
            'Content-Type': 'audio/mpeg',
            'Content-Length': response.AudioStream.length
        });
        res.send(response.AudioStream);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
