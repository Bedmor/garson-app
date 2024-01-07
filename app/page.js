"use client";

import data from "./api/DB/tasks.json";
import { useEffect, useState } from "react";
import Anime from "react-anime";
import { SessionProvider, signOut, useSession } from "next-auth/react";



export function Cross({ theme, className }) {
  //?Figure this out sometime
  return <div className={className}>
    <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" viewBox="0 0 20 20">
      <path fill={theme == "light" ? "black" : "white"} d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10L4.293 5.707a1 1 0 0 1 0-1.414" />
    </svg>
  </div>;
}


export function Check({ theme, className }) {
  return (
    <Anime duration={500} scale={[0, 1]} easing={"easeOutElastic"}>
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="4rem"
        height="4rem"
        viewBox="0 0 62 62"
        fill="none"
      >
        <path
          className="origin-center"
          id="path"
          d="M4 37.4138C16.75 43.8438 23.7625 55 23.7625 55C31.2637 32.743 38.0498 21.5495 55 4"
          stroke={theme == "light" ? "black" : "white"}
          strokeWidth="7"
        />
      </svg>
    </Anime>
  );
}

export function Sun({ className }) {
  return (
    <Anime translateY={["-1rem", "0"]}>
      <svg
        className={className}
        fill="#000000"
        height="3.5rem"
        width="3.5rem"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        enableBackground="new 0 0 512 512"
      >
        <g>
          <g>
            <path d="m256,105.5c-83.9,0-152.2,68.3-152.2,152.2 0,83.9 68.3,152.2 152.2,152.2 83.9,0 152.2-68.3 152.2-152.2 0-84-68.3-152.2-152.2-152.2zm0,263.5c-61.4,0-111.4-50-111.4-111.4 0-61.4 50-111.4 111.4-111.4 61.4,0 111.4,50 111.4,111.4 0,61.4-50,111.4-111.4,111.4z" />
            <path d="m256,74.8c11.3,0 20.4-9.1 20.4-20.4v-23c0-11.3-9.1-20.4-20.4-20.4-11.3,0-20.4,9.1-20.4,20.4v23c2.84217e-14,11.3 9.1,20.4 20.4,20.4z" />
            <path d="m256,437.2c-11.3,0-20.4,9.1-20.4,20.4v22.9c0,11.3 9.1,20.4 20.4,20.4 11.3,0 20.4-9.1 20.4-20.4v-22.9c0-11.2-9.1-20.4-20.4-20.4z" />
            <path d="m480.6,235.6h-23c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h23c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4z" />
            <path d="m54.4,235.6h-23c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h22.9c11.3,0 20.4-9.1 20.4-20.4 0.1-11.3-9.1-20.4-20.3-20.4z" />
            <path d="M400.4,82.8L384.1,99c-8,8-8,20.9,0,28.9s20.9,8,28.9,0l16.2-16.2c8-8,8-20.9,0-28.9S408.3,74.8,400.4,82.8z" />
            <path d="m99,384.1l-16.2,16.2c-8,8-8,20.9 0,28.9 8,8 20.9,8 28.9,0l16.2-16.2c8-8 8-20.9 0-28.9s-20.9-7.9-28.9,0z" />
            <path d="m413,384.1c-8-8-20.9-8-28.9,0-8,8-8,20.9 0,28.9l16.2,16.2c8,8 20.9,8 28.9,0 8-8 8-20.9 0-28.9l-16.2-16.2z" />
            <path d="m99,127.9c8,8 20.9,8 28.9,0 8-8 8-20.9 0-28.9l-16.2-16.2c-8-8-20.9-8-28.9,0-8,8-8,20.9 0,28.9l16.2,16.2z" />
          </g>
        </g>
      </svg>
    </Anime>
  );
}

export function Crescent({ className }) {
  return (
    <Anime translateY={["1rem", "0"]}>
      <svg
        className={className}
        fill="#FFFFFF"
        height="3.5rem"
        width="3.5rem"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        enableBackground="new 0 0 512 512"
      >
        <g>
          <path d="m494.9,331.3c-6.1-6.1-15.3-7.8-23.2-4.2-37.1,17.1-78.3,23.2-119,17.6-117.3-16.3-199.5-125.2-183.3-242.8 3-21.4 9-42.2 18.1-61.6 3.6-7.8 2-17.1-4.1-23.2-6.1-6.1-15.3-7.7-23.2-4.2-43.7,19.4-130.3,81.1-146.5,197.9-25.8,186.5 139,284.9 218.4,289.2 55.7,3.1 189.9,8.1 266.9-145.5 3.8-7.7 2-17.1-4.1-23.2zm-257.2,127.9c-117.3-16.3-199.5-125.2-183.3-242.8 7.6-55 35.5-103.8 77.4-137.7-1.2,5.8-2.2,11.6-3,17.5-27.2,193.6 143,282.8 218.3,289.2 29,2.5 57.9,3.1 86-2.7-46.5,57.2-119.7,87-195.4,76.5z" />
        </g>
      </svg>
    </Anime>
  );
}

export function Tasks({ theme }) {
  const { data: session, status } = useSession();
  let task_list = data.tasks;
  const [check_list, setCheckList] = useState(
    Array(task_list.length).fill(false)
  );
  let yeni = [...check_list];

  return (
    <div className="TASKS flex flex-col w-full place-items-center gap-5 px-5">
      {task_list == "" ? (
        <h1 className="dark:text-white dark:ring-white ring-2 ring-black rounded-md p-8">
          No Tasks For Now
        </h1>
      ) : (
        task_list.map((task) => {
          return (
            <div key={task_list.indexOf(task) + 3} className="w-full ">
              <h1
                key={task}
                className="bg-zinc-100 text-center text-5xl items-center justify-items-center border-black/20 border shadow-black/20 shadow-xl w-full leading-relaxed rounded-xl dark:border-0 dark:ring-2 dark:text-white dark:ring-white dark:bg-black"
              >
                {task}
              </h1>
              <button
                checked={check_list[task_list.indexOf(task)]}
                onClick={(e) => (
                  (yeni[task_list.indexOf(task)] = yeni[task_list.indexOf(task)]
                    ? false
                    : true),
                  setCheckList(yeni)
                )}
                key={task_list.indexOf(task)}
                className="bg-white dark:bg-black dark:ring-white ring-black ring-2 rounded-md w-16 h-16 relative bottom-[4.5rem] left-2"
              >
                {check_list[task_list.indexOf(task)] && (
                  status == "authenticated" ? <Cross
                    className="relative"
                    key={"cross" + task_list.indexOf(task)}
                    theme={theme}></Cross> :
                    <Check
                      className="relative"
                      key={"check" + task_list.indexOf(task)}
                      theme={theme}
                    />
                )}
              </button>
            </div>
          );
        })
      )}
    </div>
  );
}

export default function Home(session) {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`${theme}`}>
      <SessionProvider session={session}>
        <div
          className={`SUB flex dark:bg-black bg-white flex-col justify-center place-items-center gap-10`}
        >
          <div className="BAR flexbox flex-row border-b-2 dark:border-white border-black w-full h-24">
            <svg
              className="left-12 top-0 w-20 h-20"
              width="190"
              height="227"
              viewBox="0 0 190 227"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="white"
              strokeWidth="4"
            >
              <path
                className="border-black border-8"
                d="M0 55C0 45.0589 8.05888 37 18 37H170C181.046 37 190 45.9543 190 57V209C190 218.941 181.941 227 172 227H18C8.05887 227 0 218.941 0 209V55Z"
                fill="black"
              />
              <path d="M95 150L30.0481 37.5L159.952 37.5L95 150Z" fill="white" />
              <circle cx="95" cy="122" r="10" fill="black" />
              <circle cx="95" cy="88" r="10" fill="black" />
              <path d="M95 42L128 22.9474V61.0526L95 42Z" fill="black" />
              <path d="M98 42L65 61.0526V22.9474L98 42Z" fill="black" />
            </svg>
            <h1 className="HEADER dark:text-white text-7xl leading-normal relative -top-[5.5rem] font-bold font-mono text-center margin-0">
              Garsonify
            </h1>
            <button
              onClick={() => {
                if (theme == "light") {
                  setTheme("dark");
                }
                if (theme == "dark") {
                  setTheme("light");
                }
              }}
              className="w-14 h-12  absolute right-4 top-0 my-6"
            >
              <div>
                {theme == "light" ? (
                  <Sun className="sevece" />
                ) : (
                  <Crescent className="sevece" />
                )}
              </div>
            </button>
          </div>
          <Tasks theme={theme}></Tasks>
          <div className="BAR flexbox border-b-2 dark:border-white border-black w-full h-24"></div>
          <h1>Made By Bedmor</h1>
        </div>
      </SessionProvider>
    </div>
  );
}
