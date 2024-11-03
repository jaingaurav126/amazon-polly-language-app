const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
const translate = new AWS.Translate({ region: process.env.AWS_REGION });

router.post('/', async (req, res) => {
    const { text, targetLanguage } = req.body;

    try {
        const params = {
            Text: text,
            SourceLanguageCode: 'en', // Assuming the source language is English
            TargetLanguageCode: targetLanguage,
        };

        const translationResponse = await translate.translateText(params).promise();
        res.json({ translatedText: translationResponse.TranslatedText });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
