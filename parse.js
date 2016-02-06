const express       = require('express');
const ParseServer   = require('parse-server').ParseServer;

const app  = express();
const port = process.env.PORT || 8080;

// Specify the connection string for your mongodb database
// and the location to your Parse cloud code
const parse = new ParseServer({
    databaseURI: 'mongodb://localhost:27017/dev',
    cloud: '/usr/src/parse/cloud/main.js',
    appId: process.env.APP_ID,
    masterKey: process.env.MASTER_KEY,
    fileKey: process.env.FILE_KEY
});

// Serve the Parse API on the /parse URL prefix
app.use('/parse', parse);

// Hello world
app.get('/', (req, res) => {
    res.status(200).send('Express is running here.');
});

app.listen(port, () => {
    console.log(`Docker Parse Server running on port ${port} with appId ${process.env.APP_ID}`);
});
