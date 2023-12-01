"use client";

import nextAuth from "next-auth";
import { useEffect, useState } from "react";
import AddToDatabase from "./AddToDatabase";
import { Tasks } from "../page";

export default function Manager() {
  const [theme, setTheme] = useState("dark");
  const [taskName, setTaskName] = useState();
  return (
    <div
      className={
        theme + " main-wrapper w-screen h-screen flex-col gap-10 bg-black"
      }
    >
      <div className="add-bar bg-black w-screen h-40">
        <form
          onSubmit={async () => {
            AddToDatabase(taskName);
          }}
          className="flex justify-center items-center h-16 w-full bg-black ring-2 ring-white"
        >
          <input
            onChange={(e) => {
              setTaskName(e.target.value);
            }}
            className="w-96 h-6 bg-black ring-2 ring-white text-white"
          ></input>
          <button
            className="bg-black ring-2 text-white ring-white h-6 w-14"
            type="submit"
          >
            +
          </button>
        </form>
      </div>
      <div className="top-10 bg-black">
        <Tasks></Tasks>
      </div>
    </div>
  );
}
