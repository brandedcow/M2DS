import React, { useState } from 'react'

const Grid = (gridStore) => {
    const [isDrawing, setIsDrawing] = useState(false)

    const handleMouseDown = (e) => {
        e.preventDefault()

        setIsDrawing(true)
    }

    const handleMouseUp = (e) => {
        setIsDrawing(false)
    }
    console.log(gridStore)

    return (    
        <div 
            id="gridContainer"
            style={{ border: "1px solid black"}}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}> 
        </div>
    )
}

export default Grid