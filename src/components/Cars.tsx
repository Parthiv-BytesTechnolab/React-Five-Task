import { useState } from 'react'

interface IData {
    car: {
        // map?: Map<string, number>;
        brand:string;
        model: string;
        year: string;
        color: string;
        imgsrc: string;
    }
    onColorChange : (color:string) => void
}

const Cars = (props: IData) => {
    const { car,onColorChange } = props;

    const [carColor, setCarColor] = useState(car.color)
    
    const handleColorChange = (color:string) => {
        setCarColor(color);
        onColorChange(color);   
    }
    
    return (
        <div>
            <p>Model : {car.model}</p>
            <p>Year : {car.year}</p>
            <div>
                <button className='btn btn-success px-4' onClick={()=>handleColorChange(carColor)}>Change Color</button>
            </div>
        </div>
    )
}

export default Cars
