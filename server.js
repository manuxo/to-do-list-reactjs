const express = require('express');
const { createServer } = require('http');
const { join } = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/assets',express.static('assets'));

app.get('/',(req,res) =>{
    res.sendFile(join(__dirname,'views','index.html'));
});

const server = createServer(app);

server.listen(PORT,() => {
    console.log(`Server running at http://localhost:${PORT}`);
});