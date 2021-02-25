import React, { useState } from "react"

export const PropsAndState = ({ yourName }) => {
    let [countClicks, setCuntClicks] = useState(0)

    const handleClick = () => {
        const newCountClicks = ++countClicks
        setCuntClicks(newCountClicks)
    } 

    return (
        <>
            <h3>Welcome, {yourName} </h3>
            <p>{countClicks}</p>
            <button onClick={(handleClick)}>Click Me</button>
        </>
    )
}