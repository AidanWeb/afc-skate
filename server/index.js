//Server
const express = require ('express');
const path = require('path');

const { sync } = require("./db/index");
const { seed } = require("./db/seed");

const PORT = process.env.PORT || 3001;
const FORCE = process.env.FORCE || false;

const app = express();

// static files:
app.use(express.static(path.join(__dirname, "build")));

// difference???
//const DIST_PATH = path.join(__dirname, './dist' )
//server.use(express.static(DIST_PATH))

// not sure what this does???
// make a route for each front end page
["create"].forEach((route) => {
  app.get(`/${route}`, (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
});

// check health of server:
app.get('/health', (req, res, next)=>{
  res.send('Server is active');
})

app.use(express.json());

// here's our API:
const apiRouter = require('./routes');
const seed = require('./db/seed');
server.use('/api', apiRouter);

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({
    error: error.toString(),
  });
});

const startServer = new Promise((resolve) => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
    resolve();
  });
});

sync(FORCE)
  .then(seed)
  .then(startServer)
  .catch((error) => {
    console.error(`SERVER FAILED TO START: ${error.toString()}`);
  });