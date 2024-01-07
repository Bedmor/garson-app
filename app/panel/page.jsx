"use client";
import { Crescent, Sun } from "../page.js";
import { useState } from "react";
import { Tasks } from "../page";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";


export default function biggerFish(session, theme) {
  return <SessionProvider session={session}><Checker /></SessionProvider>
}

export function Checker() {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return <Manager></Manager>;
  } else {
    return redirect('/login');
  }
}

export function Manager() {
  const [theme, setTheme] = useState("dark");
  const [taskName, setTaskName] = useState();
  return (
    <div
      className={
        theme + " overflow-hidden main-wrapper w-full h-full flex-col gap-10 dark:bg-black bg-white"
      }
    >
      <div className="add-bar bg-white dark:bg-black w-screen h-40">
        
        <button
          onClick={() => {
            if (theme == "light") {
              setTheme("dark");
            }
            if (theme == "dark") {
              setTheme("light");
            }
          }}
          className="w-14 h-12  absolute left-4 top-0"
        >
          <div>
          {theme == "light" ? (
            <Sun className="sevece scale-75" />
          ) : (
            <Crescent className="sevece scale-75" />
          )}
        </div>
        </button>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetch("/api/DB", { body: JSON.stringify({ task: taskName }), headers: { "Content-Type": "application/json" }, method: "POST" }).then((res) => { let resu = res.json(); console.log(resu) });
          }}
          className="flex justify-center items-center h-16 w-full bg-white ring-black ring-2 dark:bg-black  dark:ring-white"
        >
          <input
            onChange={(e) => {
              setTaskName(e.target.value);
            }}
            className="w-96 h-6 dark:bg-black bg-white ring-2 dark:ring-white ring-black dark:text-white text-black rounded-r-none rounded-sm "
          ></input>
          <button
            className="dark:bg-black bg-white ring-2 dark:text-white text-black dark:ring-white ring-black rounded-l-none rounded-sm h-6 w-14"
            type="submit"
          >
            +
          </button>
          <button onClick={(e) => { e.preventDefault(); signOut() }} className="w-14 h-5 dark:bg-black bg-white absolute right-5 ring-2 dark:ring-white ring-black dark:text-white text-black text-xs rounded-sm overflow-hidden"> Sign Out</button>
        </form>
      </div>
      <div className="Tasks h-fit top-10 bg-white dark:bg-black">
        <Tasks></Tasks>
      </div>
      <div className="BAR bg-black flex justify-center items-center border-t-2 dark:border-white border-black w-full h-24"><h1 className="text-black dark:text-white">Made By Bedmor</h1></div>


    </div>
  );
}
