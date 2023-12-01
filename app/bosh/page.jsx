"use client";
import "../globals.css";
import ReactAnime from "react-animejs";
import anime from "animejs";

const { Anime, stagger } = ReactAnime;

export default function Ev() {
  return (
    <Anime
      className="flex justify-center items-center h-screen w-screen"
      initial={[
        {
          targets: "circle",
          strokeDashoffset: [anime.setDashoffset, '100%'],
          direction:'forwards',
          easing: "easeInOutCirc",
          duration: 3000,
          loop: false,
        },
      ]}
    >
      <svg
        className="items-center justify-center flex"
        width="8rem"
        height="8rem"
      >
        <circle
        style={{transform:"scaleX(1,-1)", transformOrigin:"center",}}
          className="circle "
          cx="2rem"
          cy="2rem"
          r="2rem"
          stroke="black"
          strokeWidth="0.20rem"
          strokeDashoffset="1000"
          strokeDasharray="1000"
          fill="none"
        ></circle>
      </svg>
    </Anime>
  );
}
