import { type } from "@testing-library/user-event/dist/type";
import React, {useState, useEffect, useMemo} from "react";
import Controls from "./Controls";

const Sample=()=>{
  const [typeCount, setTypeCount] = useState(false); // sum=true, substract=false
  const [count, setCount] = useState(0);
  const [randomID, setRandomID] = useState(0);
  const [background, setBackground] = useState('#d2a552');
  let items=useMemo(()=>[randomID]);

  useEffect(
    ()=>{
      if(typeCount===true){
        setBackground('#d2a552');
        setRandomID(randomID+1);
        items.push(items[items.length-1]+1);
      }
      else{
        setBackground('#f92f65');
        items.pop();
      }
    },
    [typeCount]
  )
  return(
    <div className="sample">
      <div style={{color: `${background}`}}>
        I'm a Sample Component
      </div>
      {items.map((index,id)=>
        <Controls
          key={index}
          count={count}
          background={background}
          setCount={setCount}
          setTypeCount={setTypeCount}
        />
      )}
    </div>
  );
}

export default Sample;