import {useWeather} from '../context/WeatherContext'

function Select() {
    const {NameOfCities,city,setCity}=useWeather()
    return (
        <div>
             <select name={city} defaultValue={localStorage.getItem('city')} onChange={(e)=>{
                const selectedCity=e.target.value;
                setCity(selectedCity);
                localStorage.setItem("city", selectedCity)
               
            }}>
                {NameOfCities.map((c,i)=>(
                    <option key={i}  value={c} >{c}</option>
                    ))}
            </select>
        </div>
    )
}

export default Select
