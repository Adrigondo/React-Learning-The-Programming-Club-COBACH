import React from "react";

const Controls=({
  count, background, setCount, setTypeCount
})=>(
    <div className="counter" style={{background: `${background}`}}>
      <button onClick={() => {
        setCount(count-1);
        setTypeCount(false);
      }}>-</button>
        {count}
      <button onClick={() => {
        setCount(count+1);
        setTypeCount(true);
      }}>+</button>
    </div>
  );

export default Controls;