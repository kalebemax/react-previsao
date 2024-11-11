import './WeatherInformations.css'

function WeatherInformations({ weather }) {
  console.log(weather);

  return (
    <div className='weather-container'>
        <h2>{weather.name}</h2>
        <div className='weather-info'>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt="Weather Icon"
          />
          <p className='temperature'>{Math.round(weather.main.temp)}°C</p>
        </div>
        <p className='description'>{weather.weather[0].description}</p>
        <div className='details'>
          <p>Sensação Térmica: {Math.round(weather.main.feels_like)}°C</p>
          <p className='humidity'>Umidade: {Math.round(weather.main.humidity)}%</p>
          <p>Pressão: {Math.round(weather.main.pressure)} hPa</p>
        </div>
    </div>
  );
}

export default WeatherInformations;
