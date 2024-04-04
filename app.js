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

app.get("/details", (req, res) => {
  const deepLink = `com.example.deeplink_cookbook://details?id=${req.query.id}`;
  const fallbackUrl =
    "https://www.adaptalift.com.au/new-equipment/h1-50-3-5xt-series-standard-forklifts";
  const htmlContent = `
    <html>
      <head>
        <title>Redirecting...</title>
      </head>
      <body>
        <script type="text/javascript">
          function redirectToDeepLink() {
            var isAppOpened = false;
            window.location = '${deepLink}';
            setTimeout(function() {
              if (!isAppOpened) {
                window.location.href = '${fallbackUrl}';
              }
            }, 1000); // 1000 milliseconds = 1 second
          }

          window.onload = redirectToDeepLink;

          document.addEventListener("visibilitychange", function() {
            if (document.visibilityState === 'hidden') {
              isAppOpened = true;
            }
          });
        </script>
        <p>If you are not redirected, <a href="${fallbackUrl}">click here</a>.</p>
      </body>
    </html>
  `;
  res.send(htmlContent);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
