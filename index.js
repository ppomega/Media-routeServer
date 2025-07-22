const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { createProxyMiddleware } = require("http-proxy-middleware");

dotenv.config();
app.listen(8000, () => {
  console.log("server Started");
});
app.use(
  createProxyMiddleware({
    target: process.env.SERVER,
    changeOrigin: true,
  })
);
