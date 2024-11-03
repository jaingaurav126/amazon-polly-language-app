const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient({ region: process.env.AWS_REGION });

router.post('/', async (req, res) => {
    const { user_id, progress } = req.body;

    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Item: {
            UserID: user_id,
            Progress: progress,
            Timestamp: new Date().toISOString()
        }
    };

    try {
        await dynamodb.put(params).promise();
        res.json({ message: 'Progress updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
