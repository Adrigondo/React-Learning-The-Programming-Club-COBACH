import React, {useState, useEffect, useMemo} from "react";
import Controls from "./Controls";

const Sample=()=>{
  const [typeCount, setTypeCount] = useState(false); // sum=true, substract=false
  const [count, setCount] = useState(1)
  const [background, setBackground] = useState('#d2a552');
  const [items, setItems] = useState([1,2,3]);
  const [randomID, setRandomID] = useState(1);

  useEffect(
    ()=>{
      console.log(items,randomID);
      if(typeCount===true){
        setBackground('#d2a552');
        setRandomID(randomID+1);
      }
      else{
        setBackground('#f92f65');
        setRandomID(randomID-1);
      }
    },
    [count]
  );

  useMemo(()=>{
    console.log("MEMO",items,randomID);
    let updatedItems=[...items];
    if(typeCount===true){
      updatedItems.push(randomID);
    }
    else{
      updatedItems.pop();
    }
    setItems(updatedItems);
  },[randomID]);

  return(
    <div className="sample">
      <div style={{color: `${background}`}}>
        I'm a Sample Component
      </div>
      {items.map((id,index)=>
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