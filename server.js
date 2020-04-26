const express = require('express')

const mongoose = require('mongoose')
const app = express() 
const PORT = process.env.PORT || 3001; 
const routes = require('./routes')

//MIDDLEWARE 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes); 

//Connection
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/shopping-list",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
)


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});