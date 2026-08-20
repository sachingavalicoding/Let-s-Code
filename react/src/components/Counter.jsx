import { useState } from "react"

const Counter = () => {
    const [value , setValue] = useState(0);
    const handleCounter = () => {
        setValue(value + 1)
    }
    return(
        <div className="counter__container">
            <p> Counter : </p> <button className="btn" onClick={handleCounter}>{value}</button>
        </div>
    )
}
export default Counter;