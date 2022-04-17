import React, { useState } from 'react'
import './style.css'

const PalettColor = () => {
  const colors = ['#ffc107', '#ff9800', '#ff5722', '#795548', '#607d8b']
  
  const [colorIndex, setColor] = useState(colors[0])
  
  return (
    <div className='palette-color'>
      <div className="view" style={{backgroundColor: colorIndex}}></div>
      <div className="btns">
        {
          colors.map(color => (
            <button className='btn' key={color} style={{ backgroundColor: color }} onClick={() => setColor(color)}></button>
          ))
        }
      </div>
    </div>
  )
}

export default PalettColor