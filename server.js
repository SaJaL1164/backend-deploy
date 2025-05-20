// server.js
const corsAnywhere = require("cors-anywhere");

const port = process.env.PORT || 8080;

corsAnywhere
  .createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ["origin", "x-requested-with"],
    removeHeaders: ["cookie", "cookie2"],
  })
  .listen(port, () => {
    console.log(`CORS proxy running on port ${port}`);
  });
