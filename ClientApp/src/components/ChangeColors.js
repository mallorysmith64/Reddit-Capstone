import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

const ChangeColors = () => {
  const [hue, setHue] = useState(Math.floor(Math.random() * 360))
  const [saturation, setSaturation] = useState(50)
  const [lightness, setLightness] = useState(50)

  const changeColor = () => {
    setHue(Math.ceil(Math.random() * 360))
    setSaturation(Math.ceil(Math.random() * 100))
    setLightness(Math.ceil(Math.random() * 100))
    console.log('changeColor')
  }

  return (
    <>
      {/* <Link to="/ChangeColors"> */}
      <div>
        <button onClick={() => changeColor()}>Click Me</button>
      </div>
      <section
        style={{
          backgroundColor: `hsl(${hue},${saturation}%,${lightness}%)`
        }}
      >
        <h2>Hue: {hue}</h2>
        <input
          type="range"
          min="0"
          max="360"
          step="2"
          value={hue}
          onChange={e => setHue(e.target.value)}
        />
        <h2>Lightness: {lightness}</h2>
        <input
          type="range"
          min="0"
          max="100"
          step="2"
          value={lightness}
          onChange={e => setLightness(e.target.value)}
        />
        <h2>Saturation: {saturation}</h2>
        <input
          type="range"
          min="0"
          max="100"
          step="2"
          value={saturation}
          onChange={e => setSaturation(e.target.value)}
        />
      </section>
      {/* </Link> */}
    </>
  )
}

export default ChangeColors
