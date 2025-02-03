import express from "express";

// init the app
const app = express();

// home route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// fix port (from envs in production)
const port = process.env.PORT || 3000;

// generic api enpoint
app.get("/friends", (req, res) => {
  const friends = [
    { id: 1, name: "Soma" },
    { id: 2, name: "Bunnu" },
    { id: 3, name: "Hoods" },
  ];
  res.send(friends);
});

// listen to the port
app.listen(port, () => {
  console.log(`Server is running on : http://localhost:${port}/`);
});
