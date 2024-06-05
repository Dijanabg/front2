import { useState } from "react";
import "./Stopwatch2.css";
import { useEffect } from "react";

// const format_time = (time) => {
//   let ms = time;
//   let s = Math.floor(ms / 1000);
//   ms = ms - s * 1000;
//   let m = Math.floor(s / 60);
//   s = s - 60 * m;
//   let h = Math.floor(m / 60);
//   m = m - 60 * h;
//   let d = Math.floor(h / 24);
//   h = h - 24 * d;
//   ms = ms.toString().padStart(3, "0");
//   s = s.toString().padStart(2, "0");
//   m = m.toString().padStart(2, "0");
//   h = h.toString().padStart(2, "0");
//   d = d.toString().padStart(2, "0");
//   return `${d}:${h}:${m}:${s}.${ms}`;
// };

const formatTime = (time) => {
  let ms = time % 1000;
  let seconds = Math.floor(time / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  minutes %= 60;
  seconds %= 60;

  ms = ms.toString().padStart(3, "0");
  seconds = seconds.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  hours = hours.toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}.${ms}`;
};
const TimeDisplay = ({ time }) => {
  return <div className="time-display">{formatTime(time)}</div>;
};
// const Stopwatch2 = () => {
//     const [time, setTime] = useState(0);
//     const [on, setOn] = useState(false);
//     const [laps, setLaps] = useState([]);
//     useEffect(() => {
//         let id = setInterval(() => {
//             if(on){
//                 setTime(t => t + 100);
//             }
//         }, 100);
//         return () => {
//             clearInterval(id);
//         }
//     }, [on]);
//     const start_stop = () => {
//         setOn(o => !o);
//     }
//     return <div className="stopwatch-main">
//         <TimeDisplay time={time}/>
//         <button onClick={() => setTime(0)} className="button reset">Reset</button>
//         <button onClick={() => {
//             setLaps([...laps, {t: time, id: crypto.randomUUID()}]);
//         }}className="button lap">Lap</button>
//         {on ? <button onClick={start_stop} className="button pause">Pause</button> : <button onClick={start_stop} className="button start">Start</button>}
//         <ul className='lap-list'>
//             {laps.map((v) => <li key={v.id}>{format_time(v.t)}</li>)}
//         </ul>
//     </div>;
// }

// export default Stopwatch2;
const CountdownTimer = () => {
  const [time, setTime] = useState(0);
  const [on, setOn] = useState(false);

  useEffect(() => {
    let intervalId = null;
    if (on && time > 0) {
      intervalId = setInterval(() => {
        setTime((t) => t - 100);
      }, 100);
    }

    const cleanup = () => {
      clearInterval(intervalId);
    };

    return cleanup;
  }, [on, time]);

  const handleStart = (totalMinutes) => {
    setTime(totalMinutes * 60 * 1000);
    setOn(true);
  };

  const handleReset = () => {
    setTime(0);
    setOn(false);
  };
  const togglePause = () => {
    setOn(!on);
  };
  return (
    <div className="stopwatch-main">
      <TimeDisplay time={time} />
      <button onClick={() => handleStart(5)} className="button start">
        Start 5 min
      </button>
      <button onClick={() => handleStart(15)} className="button start1">
        Start 15 min
      </button>
      <button onClick={() => handleStart(30)} className="button start2">
        Start 30 min
      </button>
      <button onClick={handleReset} className="button reset">
        Reset
      </button>
      {time > 0 && (
        <button onClick={togglePause} className="button pause">
          {on ? "Pauza" : "Start"}
        </button>
      )}
    </div>
  );
};

export default CountdownTimer;
