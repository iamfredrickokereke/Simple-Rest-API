const express = require("express");

const app = express();

const port = 8000;

app.get('/', (req, res) => { res.send("Connected to server")})

app.get('/api/users', (req, res) => {

    
    const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://Kelly:<password>@mycluster-dex7f.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
    });



} )

app.listen(port, () => { console.log("Server is running on port " + port)});
