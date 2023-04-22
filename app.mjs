"use strict";
import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import ejs from "ejs";
import dotenv from "dotenv/config";

const app = express(), __filename = fileURLToPath(import.meta.url), __dirname = dirname(__filename);

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.get("/", (req, res) => res.sendFile(__dirname + "/toDo.html"));
app.get("/date", (req, res) => {
  const date = new Date(), today = date.getDay();
  let weekDay = "";

  switch (today) {
    case 0:
      weekDay = "Sunday"
      break;
    case 1:
      weekDay = "Monday"
      break;
    case 2:
      weekDay = "Tuesday"
      break;
    case 3:
      weekDay = "Wednesday"
      break;
    case 4:
      weekDay = "Thursday"
      break;
    case 5:
      weekDay = "Friday"
      break;
    case 6:
      weekDay = "Saturday"
      break;

    default:
      console.error(`Error: current day's ${today} 🚨`);
      break;
  }

  console.log(`date's ${date}\ntoday's ${today}\nweekDay's ${weekDay}`);
  res.render("list", { kindaDay: weekDay });
  //* res.render("ejsTemplateFileName", { key: value });
});

app.listen(process.env.PORT, console.log(`server is running on ${process.env.PORT} port 🚨`));

// we can only send only one res.send , when the browser see res.send it will stop to send file to the browser