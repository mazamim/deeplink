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

// Intermediate endpoint to handle deep linking
app.get("/details", (req, res) => {
  const deepLink = `intent://details?id=${req.query.id}#Intent;scheme=com.example.deeplink_cookbook;package=com.example.deeplink_cookbook;end`;
  const fallbackUrl =
    "https://www.adaptalift.com.au/new-equipment/h1-50-3-5xt-series-standard-forklifts";
  const htmlContent = `
    <html>
      <head>
        <script type="text/javascript">
          function attemptDeepLink() {
            window.location.href = '${deepLink}';
            setTimeout(function() {
              window.location.href = '${fallbackUrl}';
            }, 3000); // Adjust the delay as needed
          }
        </script>
      </head>
      <body onload="attemptDeepLink()">
        <p>If you are not redirected, <a href="${fallbackUrl}">click here</a>.</p>
      </body>
    </html>
  `;
  res.send(htmlContent);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
