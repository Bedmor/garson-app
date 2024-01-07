"use client";
import { useSession, signIn,SessionProvider } from "next-auth/react"
import { useState } from "react";

export function Login(user, pass) {
  let res = signIn("credentials", {
    username: user,
    password: pass,
    callbackUrl: "/panel",
  });
  console.log(res);
}

let formStyle =
  " ring-2 rounded-md w-40 ring-white px-2 py-1 text-zinc-200 placeholder-gray-400 bg-zinc-950";

export function LoginForm() {
  const { data: session, status } = useSession();
  const [user, setusername] = useState();
  const [pass, setpassword] = useState();
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-zinc-950">
      <div className="absolute top-3 left-3 ">
        <svg
          className="left-12 top-0 w-20 h-20"
          width="190"
          height="227"
          viewBox="0 0 190 227"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="ring-2 ring-white"
            d="M0 55C0 45.0589 8.05888 37 18 37H170C181.046 37 190 45.9543 190 57V209C190 218.941 181.941 227 172 227H18C8.05887 227 0 218.941 0 209V55Z"
            fill="black"
            stroke="white"
            strokeWidth={2}
          />
          <path d="M95 150L30.0481 37.5L159.952 37.5L95 150Z" fill="white" />
          <circle cx="95" cy="122" r="10" fill="black" />
          <circle cx="95" cy="88" r="10" fill="black" />
          <path
            stroke="white"
            strokeWidth={2}
            d="M95 42L128 22.9474V61.0526L95 42Z"
            fill="black"
          />
          <path
            stroke="white"
            strokeWidth={2}
            d="M98 42L65 61.0526V22.9474L98 42Z"
            fill="black"
          />
        </svg>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          Login(user, pass);
        }}
        className="flex justify-center items-center flex-col rounded-sm h-48 w-48 gap-6 ring-2 ring-white"
      >
        <input
          onChange={(event) => setusername(event.target.value)}
          placeholder="username"
          defaultValue={null}
          className={formStyle}
          type="username"
        ></input>
        <input
          onChange={(event) => setpassword(event.target.value)}
          placeholder="password"
          defaultValue={null}
          className={formStyle}
          type="password"
        ></input>
        <button
          className=" bg-black ring-2 rounded-lg ring-white text-white h-8 w-12"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default function Page(session) {
  return <div><SessionProvider session={session}><LoginForm></LoginForm></SessionProvider></div>
}