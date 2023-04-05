import * as dotenv from "dotenv";
import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
// import ejs from "ejs";

dotenv.config();
const app = express(), __filename = fileURLToPath(import.meta.url), __dirname = dirname(__filename);
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.get("/", (req, res) => res.sendFile(__dirname + "/toDo.html"));
app.get("/today", (req, res) => {
  const today = new Date(), currentDay = today.getDay();
  let day = "";

  switch (currentDay) {
    case 0:
      day = "Sunday"
      break;
    case 1:
      day = "Monday"
      break;
    case 2:
      day = "Tuesday"
      break;
    case 3:
      day = "Wednesday"
      break;
    case 4:
      day = "Thursday"
      break;
    case 5:
      day = "Friday"
      break;
    case 6:
      day = "Saturday"
      break;

    default:
      console.log(`Error: current day is equal to ${currentDay}`);
      break;
  }

  console.log(`today's ${today}\ncurrentDay's ${currentDay}\ntoday's ${today}`);
  res.render("list", { kindaDay: day });
  //* res.render("ejsTemplateFileName", { key: value });
});

app.listen(process.env.PORT, console.log(`server is running on ${process.env.PORT} port 🚨`));

// we can only send only one res.send , when the browser see res.send it will stop to send file to the browser