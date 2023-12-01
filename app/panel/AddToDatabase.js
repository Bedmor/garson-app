"use server";
import data from "../json/tasks.json";
import fs from "fs";
import fsp from "fs/promises";

export default async function AddToDatabase(taskToBeAdded) {
  let finalData = [];
  data.tasks.map((task) => {
    finalData.push(`"${task}"`);
  });
  finalData = [...finalData, `"${taskToBeAdded}"`];
  fs.writeFile(
    "@/json/tasks.json",
    `{"tasks":[${finalData}]}`,
    "utf-8",
    (err) => {
      if (err) throw err;
    }
  );
  return true;
}
