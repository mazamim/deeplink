const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Serve 'basicindex.html' when the root URL is accessed
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/details", (req, res) => {
  res.redirect("https://www.adaptalift.com.au/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
