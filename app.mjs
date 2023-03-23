import * as dotenv from "dotenv";
import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
// import ejs from "ejs";

dotenv.config();
const app = express(), __filename = fileURLToPath(import.meta.url), __dirname = dirname(__filename);
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.get("/", (req, res) => res.sendFile(__dirname + "/toDo.html"));
app.get("/today", (req, res) => {
  const day = new Date();
  (day.getDay() === 0 || day.getDate() === 21) ? res.send("Just chilling!") : res.send("You have to work");
});

app.listen(process.env.PORT, console.log(`server is running on ${process.env.PORT} port 🚨`));

// we can only send only one res.send , when the browser see res.send it will stop to send file to the browser
