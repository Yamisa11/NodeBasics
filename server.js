const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const cors = require('cors')

const PORT = 5050;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true,
}));



var corsOptions = {
    origin: "http://localhost:8081/"
  };

  app.use(cors(corsOptions));

app.get('/', (req,res) => {
    // res.send("Server OnLine")[{
    //     extended:true,
    // }]
   res.json({info:"Server OnLine"});
});

const db = require("./models");

  db.mongoose
    .connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("Connected to the database!");
    })
    .catch(err => {
      console.log("Cannot connect to the database!", err);
      process.exit();
    });

require("./routes/post.routes")(app)

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
})