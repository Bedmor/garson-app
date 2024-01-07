"use server";
import data from "./tasks.json";
import fs from "fs";




export async function DeleteFromDatabase(taskToBeDeleted) {
  if (taskToBeDeleted == undefined) {
    return false;
  }
  let finalData = [];
  data.tasks.map((task) => {
    finalData.push(`"${task}"`);
  });

  let indexofdeleted = finalData.indexOf(`"${taskToBeDeleted}"`);
  finalData.splice(indexofdeleted, 1);
  fs.writeFile(
    "./app/api/DB/tasks.json",
    `{"tasks":[${finalData}]}`,
    "utf-8",
    (err) => {
      if (err) throw err;
    }
  );
  return true;
}
export async function AddToDatabase(taskToBeAdded) {
  let finalData = [];
  data.tasks.map((task) => {
    finalData.push(`"${task}"`);
  });
  if (taskToBeAdded == undefined || finalData.includes(`"${taskToBeAdded}"`)) {
    return false;
  }
  else {
    finalData = [...finalData, `"${taskToBeAdded}"`];
    fs.writeFile(
      "./app/api/DB/tasks.json",
      `{"tasks":[${finalData}]}`,
      "utf-8",
      (err) => {
        if (err) throw err;
      }
    );
    return true;
  }
}
