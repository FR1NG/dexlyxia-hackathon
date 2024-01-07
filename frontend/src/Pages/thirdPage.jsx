import { MdOutlineMicOff } from "react-icons/md";
import { MdOutlineMicNone } from "react-icons/md";

export default function ThirdPage({ state, setState }) {
  function handleMic(e) {
    e.preventDefault();
    setState({ ...state, recording: !state.recording });
  }

  function handleLetterSound(e) {}
  
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-10 ">
        <h2 className="items-center justify-center text-white drop-shadow-sm text-4xl font-bold  text-center">
          Pronounce the letter C
        </h2>
        <div
          className="flex justify-center items-center rounded-lg bg-white h-[300px] w-[300px] cursor-pointer drop-shadow-lg"
          onClick={handleLetterSound}
        >
          <p className="text-7xl">C</p>
        </div>
        <div
          className="h-20 w-20 rounded-full  bg-white flex justify-center items-center cursor-pointer"
          onClick={handleMic}
        >
          {state.recording ? (
            <MdOutlineMicOff size={42} className="text-slate-800" />
          ) : (
            <MdOutlineMicNone size={42} className="text-slate-800" />
          )}
        </div>
      </div>
    </div>
  );
}