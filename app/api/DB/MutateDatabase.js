"use server";
import data from "./tasks.json";
import fs from "fs";
import fsp from "fs/promises";



export async function DeleteFromDatabase(taskToBeDeleted) {
  if (taskToBeDeleted == undefined) {
    return false;
  }
  let finalData = [];
  data.tasks.map((task) => {
    finalData.push(`"${task}"`);
  });
  indexofdeleted = finalData.indexOf(`"${taskToBeDeleted}"`);
  finalData.pop(indexofdeleted);
  fs.writeFile(
    "./tasks.json",
    `{"tasks":[${finalData}]}`,
    "utf-8",
    (err) => {
      if (err) throw err;
    }
  );
  return true;
}
export async function AddToDatabase(taskToBeAdded) {
  if (taskToBeAdded == undefined) {
    return false;
  }
  let finalData = [];
  data.tasks.map((task) => {
    finalData.push(`"${task}"`);
  });
  finalData = [...finalData, `"${taskToBeAdded}"`];
  fs.writeFile(
    "./tasks.json",
    `{"tasks":[${finalData}]}`,
    "utf-8",
    (err) => {
      if (err) throw err;
    }
  );
  return true;
}
