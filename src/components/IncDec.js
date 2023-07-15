import React, { useState } from 'react';
import './incDec.css';

const IncDec = () => {
    const [num, setNum] = useState(0);

    const Increment = () => {
        setNum(num + 1);
    }

    const Decrement = () => {
        num == 0 ? null : setNum(num-1);
    }

  return (
    <>
        <div className="main_div">
            <div className="center_div">
                <h1>{num}</h1>
                <div className="btn_div">
                    <button onClick={Increment}>Increment</button>
                    <button onClick={Decrement}>Decrement</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default IncDec