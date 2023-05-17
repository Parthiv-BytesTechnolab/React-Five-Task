import { useState } from 'react'
import Cars from './Cars'
import { Data } from './Data'

interface IProps {
  brand:string
  model: string;
  year: string;
  color: string;
  imgsrc: string;
}

const MainCars = () => {
  const [cars, setCars] = useState<any>(Data)
  
  const [color,setColor] = useState<any>('');
  const [brandName,setBrandName] = useState<any>('');

  const handleColorChange = (colors: string, index: number) => {
      setColor(colors)
      setBrandName(index)
  }

  
  return (
    <div>
      <h1 className='text-center mt-5  p-2'>CARS DETAILS</h1>
      <div className='container'>
        <div className='row'>
            {cars.map((car:IProps,index:number)=>(
              <div key={`Carsindex_${index}`} className='col-3'>
                <div className='card p-2 shadow'>
                  <div><img src={car.imgsrc} alt="car_Images"/></div>
                  <div><h3 style={{color: brandName === index ? color : 'black'}}>Brand: {car.brand}</h3></div>
                  <Cars car={car} onColorChange={(color:string)=>handleColorChange(color,index)} />
                </div>
              </div>  
            ))}
        </div>
      </div>
    </div>
  )
}

export default MainCars

