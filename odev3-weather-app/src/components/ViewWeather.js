import {useWeather} from '../context/WeatherContext'

function ViewWeather() {
    const {weatherData,tempMax,tempMin}=useWeather()
    return (
        <div>
              <h2>{weatherData && <div>
                  
                <span>Hava Durumu: {weatherData}</span><br/>
                  <span>Minimum sıcaklık: {tempMin}</span><br/>
                  <span>Maximum sıcaklık: {tempMax}</span>
                  
                  </div>}</h2>
              <h2>{!weatherData && "Loading..."}</h2>
          
            
        </div>
    )
}

export default ViewWeather
