const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;

require('events').EventEmitter.defaultMaxListeners = 500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '.')));

// Routes
let code = require('./pair');
app.use('/code', code);

// Pairing page
app.get('/pair', (req, res) => {
    res.sendFile(path.join(__dirname, 'pair.html'));
});

// Settings page (with login)
app.get('/setting', (req, res) => {
    res.sendFile(path.join(__dirname, 'setting.html'));
});

// Auto-reply manager page
app.get('/autoreply', (req, res) => {
    res.sendFile(path.join(__dirname, 'autoreply.html'));
});

// Main homepage
app.get('/main', (req, res) => {
    res.sendFile(path.join(__dirname, 'main.html'));
});

// Admin dashboard (user settings management)
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

// Profile picture downloader
app.get('/getdp', (req, res) => {
    res.sendFile(path.join(__dirname, 'getdp.html'));
});

// Channel reaction system
app.get('/react', (req, res) => {
    res.sendFile(path.join(__dirname, 'react.html'));
});

// Root → main homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'main.html'));
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`
---------------------------------------
  lakshan md Bot Server
  Port : ${PORT}
  Pair : http://localhost:${PORT}/pair
  Settings : http://localhost:${PORT}/setting
  Admin : http://localhost:${PORT}/code/dashboard
---------------------------------------
    `);
});

module.exports = app;
