import { useState } from "react";

const Colorizer = () => {
    const [color, setColor] = useState("#6d0e0e");
    const getRandomColor = () => {
        const random = `#${Math.floor(Math.random() * 16777215).toString(16)}`
        return random;
    }
    const colorChange = () => {
        console.log('====================================');
        console.log("Color changed");
        console.log('====================================');
        let newColor = getRandomColor();
        setColor(newColor);
    }
    return (
        <div className="colorizer">
            <div className="box" style={{backgroundColor: color}}></div>
            <button onClick={ colorChange }>Change color</button>
        </div>
    )
}

export default Colorizer;