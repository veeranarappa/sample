import React,{useState, useEffect} from 'react'

function UseEffect()  {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
  
    function toggle() {
      setIsActive(!isActive);
    }
  
    function reset() {
      setSeconds(0);
      setIsActive(false);
    }
  
    useEffect(() => {
      let interval = null;
      if (isActive) {
        interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 1000);
      } else if (!isActive && seconds !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isActive, seconds]);
  
    return (
      <div className="app">
        <div className="time">
          {seconds}
        </div>
        <div className="row">
          <button  onClick={toggle}>
            {isActive ? 'Pause' : 'Start'}
          </button>
          <button className="button" onClick={reset}>
            Reset
          </button>
        </div>
        <br/>
        <br/>
      </div>
    );
  };

  export default UseEffect;