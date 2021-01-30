const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://redonearth:abcd1234@boilerplate.noibt.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  )
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello Express!"));

app.listen(port, () => console.log(`App listening on port ${port}!`));
