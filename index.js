const express = require("express");

const app = express();

const port = 8000;

const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://Kelly:root@mycluster-dex7f.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true });

app.get('/', (req, res) => { res.send("Connected to server")})

app.get('/api/users', (req, res) => {

    
    
    client.connect(err => {
    const collection = client.db("test").collection("users");
    // perform actions on the collection object

    collection.find().toArray((error, documents) => { 
        
        if (error){
            throw error;
        }
        res.send(documents)})

    client.close();
    });



} )


app.post("/api/users", (req, res) => {

    client.connect(err => {
        const collection = client.db("test").collection("users");
        // perform actions on the collection object
    
        collection.insertOne(req.body, (err, result) => { 
            
            if (error){
                throw error;
            }
            res.send(result.insertedId)})
    
        client.close();
        });
    
    


}) 

app.listen(port, () => { console.log("Server is running on port " + port)});
