"use client";

import nextAuth from "next-auth";
import { useEffect, useState } from "react";
import { Check, Tasks } from "../page";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";


export default function biggerFish(session) {
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
        theme + " overflow-hidden main-wrapper w-full h-full flex-col gap-10 bg-black"
      }
    >
      <div className="add-bar bg-black w-screen h-40">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetch("/api/DB", {body: JSON.stringify({task: taskName}),headers:{"Content-Type":"application/json"}, method: "POST"}).then((res) => {console.log(res);});
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
          <button onClick={(e) => {e.preventDefault(); signOut() }} className="w-14 h-5 bg-black absolute right-5 ring-2 ring-white text-white text-xs overflow-hidden"> Sign Out</button>
        </form>
      </div>
      <div className="top-10 bg-black">
        <Tasks></Tasks>
      </div>
    </div>
  );
}
