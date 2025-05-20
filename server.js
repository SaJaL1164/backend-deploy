const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();

// Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// Proxy route
app.use(
  "/api",
  createProxyMiddleware({
    target: "http://147.93.103.211:5000",
    changeOrigin: true,
    pathRewrite: {
      "^/api": "",
    },
  })
);

// Dynamic port for Render
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
