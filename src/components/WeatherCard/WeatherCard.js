import CurrentCity from "./components/CurrentCity"
import OtherCities from "./components/OtherCities"
import Forecast from "./components/Forecast"
import { useEffect,useState } from "react"
import oneCall from "../../apis/onecall"


const WEEK_DAYS = ['SUN', 'MON', 'Tue', 'Wed', 'Thu', 'Fri', 'SAT']
const WeatherCard = () => {
  const [current, setCurrent] = useState()

  //因为命名问题
  // const [humidity,setHumidity] = useState()
  // const [wind,setWind] = useState()
  // const [weather, setWeather] = useState()
  // const [temperature, setTemperature] = useState(17.5)

  // const [loading, setLoading] = useState(true)

  const [forecast, setForecast] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    oneCall()
      .then((data) => {
        setCurrent(data.current)

        // console.log((data.current));
        const daily = data.daily.slice(1, 6).map((day) => ({
          name: WEEK_DAYS[new Date(day.dt * 1000).getDay()],
          weather: {
            code: day.weather[0].icon,
            name: day.weather[0].main,
          },
          temperature: Number.parseInt(day.temp.day),
        }))

        setForecast(daily)
        // console.log(data)
        // setTemperature(parseInt(data.current.temp))
        // setWeather(data.current.weather[0].main)
        // setHumidity(data.current.humidity)
        // setWind(data.current.wind_speed)
        // console.log(data)
      })
      .finally(() => {
        // setTempLoading(false)
        // setWeatherLoading(false)
        setLoading(false)
      })
  }, [])

  return (
    <div className="bg-white rounded-3xl shadow-2xl shadow-black/50 overflow-hidden">
      <CurrentCity
      // 条件判断来检查current?.temp是否存在。如果存在，则使用parseInt()函数将其转换为整数，否则将temperature设置为null
        // temperature={current?.temp ? parseInt(current.temp) : null}
        // weather={current?.weather[0].main}
        // wind={current?.wind_speed}
        // humidity={current?.humidity}
        current={current}
        loading={loading}
      />
      <div className="flex gap-12 px-12 py-9 ">
        <OtherCities />
        <div className="w-[3px] bg-black/10" />
        <div className="flex-1">
          <Forecast
          forecast={forecast}
          loading={loading}
          />
        </div>
      </div>
    </div>
  )
}

export default WeatherCard