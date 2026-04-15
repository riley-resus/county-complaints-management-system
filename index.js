const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/complaints';
console.log('Connecting to MongoDB...');
app.get('/api/health', (req, res) => {
    res.json({ status: 'API is running', timestamp: new Date() });
});
app.post('/api/complaints', (req, res) => {
    const { category, title, description, attachments } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }
    const complaint = {
        id: Date.now(),
        category: category || 'General',
        title,
        description,
        attachments: attachments || [],
        status: 'New',
        createdAt: new Date(),
        updatedAt: new Date()
    };
    res.status(201).json({ message: 'Complaint submitted successfully', complaint });
});
app.get('/api/complaints', (req, res) => {
    res.json({ message: 'Fetching all complaints', complaints: [] });
});
app.get('/api/complaints/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Fetching complaint with ID: ${id}`, complaint: {} });
});
app.put('/api/complaints/:id', (req, res) => {
    const { id } = req.params;
    const { status, response } = req.body;
    res.json({ message: `Updated complaint ${id}`, updatedData: { status, response } });
});
app.delete('/api/complaints/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Deleted complaint ${id}` });
});
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`County Complaints Management API running on port ${PORT}`);
});