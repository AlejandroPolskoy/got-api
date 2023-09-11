const express = require("express");
const cors = require('cors');

const PORT = 8000;
const server = express();

const routeCharacters = require("./api/routers/character.routes");
const routeHouses = require("./api/routers/houses.routes");

server.use((req, res , next) => {
    res.header('Access-Control-Allow-Method', 'GET');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

server.use( express.json() );
server.use( express.urlencoded( {extended: true} ));

server.use( "/characters", routeCharacters );
server.use( "/houses", routeHouses );
server.get( "/", (req, res) => {
    res.status(200).json({"message": "Game of Thrones API"});
});

server.use(cors({
    origin: "*",
    credentials: true
}));

server.listen(PORT, ()=> console.log(`listening on: http://localhost:${PORT}`));