const express = require("express");
const app = express();
const dotenv = require("dotenv");
const axios = require("axios");
dotenv.config();
app.listen(8000, () => {
  console.log("server Started");
});

app.get("/{*jty}", async (req, res) => {
  console.log(req.url);
  if (req.url == "/login" || req.url == "/signIn") {
    const Username = req.headers.username;
    const Password = req.headers.password;
    const Email = req.headers.email;
    const headers = { username: Username, password: Password, email: Email };
    const r = await axios.get(process.env.SERVER + req.url, {
      headers: headers,
    });
    console.log(r.data);
    res.send(r.data);
    return;
  }
  const r = await axios.get(process.env.SERVER + req.url);
  console.log(r.data);
  res.send(r.data);
});

module.exports = app;
