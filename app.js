// const express = require("express");
// const app = express();
// const port = process.env.PORT || 3000;

// // Serve static files from the 'public' directory
// app.use(express.static("public"));

// // Serve 'basicindex.html' when the root URL is accessed
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

// app.get("/details", (req, res) => {
//   res.redirect(
//     "https://www.adaptalift.com.au/new-equipment/h1-50-3-5xt-series-standard-forklifts"
//   );
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Serve 'index.html' when the root URL is accessed
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Serve a special page that attempts to open the deep link
app.get("/details", (req, res) => {
  const deepLink = `com.example.deeplink_cookbook://details?id=${req.query.id}`;
  const fallbackUrl =
    "https://www.adaptalift.com.au/new-equipment/h1-50-3-5xt-series-standard-forklifts";
  const htmlContent = `
    <html>
      <head>
        <meta http-equiv="refresh" content="3;url=${fallbackUrl}">
      </head>
      <body>
        <script type="text/javascript">
          window.onload = function() {
            // Try to open the deep link
            window.location = '${deepLink}';
          }
        </script>
        If you are not redirected automatically, follow the <a href="${fallbackUrl}">link</a>.
      </body>
    </html>
  `;
  res.send(htmlContent);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
