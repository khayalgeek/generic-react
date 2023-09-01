import style from './style.module.css';
import { useState } from 'react';
const Counter = () => {
    let [count, setCount] = useState(0)
    return (
        <>
            <h1>{count}</h1>
            <button
                className={style.button}
                onClick={() => { setCount(count + 1) }}>
                +
            </button>
            <button
                className={style.button}
                onClick={() => { setCount(count - 1) }}>
                -
            </button>
            <button
                className={style.button}
                onClick={()=>{
                    if (count!==0) {
                        setCount(0)
                        console.log("Ise dusdu")
                    }}}>
                sifirla
            </button>
            <button
                className={style.button}
                onClick={()=>{
                    let eded = parseInt(prompt("Eded daxil edin: "));
                    setCount(eded);
                }}>
                xususi
            </button>
            <button
                className={style.button}
                onClick={() => { console.log(count) }}>
                console
            </button>
        </>
    )
}

export default Counter