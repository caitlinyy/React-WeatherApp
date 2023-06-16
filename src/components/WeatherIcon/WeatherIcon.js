const WeatherIcon =(
  {
    code,
    weather,
    className,
  }
) =>(
  <img 
  src={`https://openweathermap.org/img/wn/${code}.png`}
  alt={weather}
  className={className}
  />
)

export default WeatherIcon