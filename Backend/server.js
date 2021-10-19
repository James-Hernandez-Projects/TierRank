const express = require("express"); //using express framework
const connectDB = require("./config/db"); //this will connect to the mongodb server
const path = require("path"); //needing the path dependency

const app = express(); //the app will be using expres

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// These are our routes the users will be able to take
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/list", require("./routes/api/lists"));

// Serve static assets in production for when the finall development is here
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    //this will res the file on the index.html page
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000; // will be accessed on port 5000 or on the heroku link we will be using

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
//the port will be open and listening to either link or port 5000
