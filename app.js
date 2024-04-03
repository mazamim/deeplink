const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello, QA! This is the Node.js project running.");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
