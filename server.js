const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

connectDB();

app.use(express.json({ extended: false }));

// define routes to simplify the server.js
app.use("/api/user", require("./routes/user"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`server started at port: ${PORT}`));
