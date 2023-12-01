export default function NotFound() {
  return (
    <div className=" bg-zinc-950 h-screen w-screen flex flex-col justify-center items-center">
      <div className=" text-cyan-50 text-5xl z-50 ">
        Sowwy Not Found {"(>ω<)"}
      </div>
      <div className="text-cyan-50 text-2xl z-50">Check The URL</div>
      <div className=" text-white text-opacity-10 z-40 select-none text-[10rem] absolute">
        404
      </div>
    </div>
  );
}
