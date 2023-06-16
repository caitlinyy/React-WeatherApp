import Temperature from "../../../../../Temperature"
// import Name from "../../../../../Name"
import WeatherIcon from "../../../../../WeatherIcon"


const DayOfWeek =(
  {
    name,
    weather,
    temperature,
  }
) =>(
  <div className="text-center">
   {/* <Name /> */}
   <div>{name}</div>
   <div className="my-4">
   <WeatherIcon code={weather.code} name={weather.name} />
   </div>
   <Temperature className="text-xl" value={temperature}/>
  </div>
)

export default DayOfWeek