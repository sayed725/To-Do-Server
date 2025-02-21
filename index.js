const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 5001;





// middleware 
app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nb52s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const db = client.db("todo_DB");
    const usersCollection = db.collection("users");
    const tasksCollection = db.collection("tasks");


     // Save user data in db
     app.post("/users", async (req, res) => {
        const user = req.body;
        // check if user is already exists
        const isExist = await usersCollection.findOne({ email: user.email });
        if (isExist) {
          return res.send(isExist);
        }
        //  new user save data in db
        const result = await usersCollection.insertOne(user);
        res.send(result);
      });

        // Save task in db 
    app.post("/add-task", async (req, res) => {
        const task = req.body;
        const result = await tasksCollection.insertOne(task);
        res.send(result);
      });

      // Get tasks based on email 
    app.get("/tasks/:email", async (req, res) => {
        const email = req.params.email;
        const result = await tasksCollection.find({ email }).toArray();
        res.send(result);
      });
     
       // Update task category --->
    app.patch("/update-task/:id", async (req, res) => {
        const id = req.params.id;
        const { category } = req.body;
        const filter = { _id: new ObjectId(id) };
        const updatedCategory = {
          $set: {
            category: category,
          },
        };
        const result = await tasksCollection.updateOne(filter, updatedCategory);
        res.send(result);
      });
  
      // Delete a task --->
      app.delete("/task/:id", async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await tasksCollection.deleteOne(query);
        res.send(result);
      });









    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('To do is running')
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});


