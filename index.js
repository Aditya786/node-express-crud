const express = require("express")
const app = express()

app.use(express.json())

// Define a simple route using Express
app.get('/user', async (req, res) => {
    try {
      // Example query to fetch data from the database
    //   const result = await pool.query('SELECT $1::text as message', ['Hello, PostgreSQL!']);
      
      // Send the result as a JSON response
      res.json({ message: "data" });
    } catch (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.listen(8989, ()=>{
    console.log("Your server is running on port 8989")
})