const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://mernuser:Chatapp123@cluster0.amweekk.mongodb.net/ChatApp?retryWrites=true&w=majority`,
  () => {
    console.log("connected to mongodb");
  }
);
