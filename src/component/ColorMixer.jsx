import React from 'react'

const ColorMixer = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    return (
        <>
            <h1 style={{ color: `rgb(${red}, ${green}, ${blue})`, textAlign: "center", fontSize: "35px", fontStyle: "italic" }}>Color Mixer</h1>
            <h2 style={{ textAlign: "center" }}>Change the range to create new color</h2>
            <div style={{ height: "250px", width: "250px", backgroundColor: `rgb(${red}, ${green}, ${blue})`, border: "1px solid #000", margin: "auto" }}>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px", fontSize: "20px" }}>
                Red  <input type='range' value={red} onChange={(e) => setRed(e.target.value)} min="0" max="255" />{red}<br /><br />
                Green <input type='range' value={green} onChange={(e) => setGreen(e.target.value)} min="0" max="255" />{green}<br /><br />
                Blue <input type='range' value={blue} onChange={(e) => setBlue(e.target.value)} min="0" max="255" />{blue}<br /><br />
            </div>
        </>
    )
}

export default ColorMixer
