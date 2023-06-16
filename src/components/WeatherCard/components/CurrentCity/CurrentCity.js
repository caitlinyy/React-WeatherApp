import Temperature from "../../../Temperature"
import Weather from "./components/Weather"
import Details from "./components/Details"
import Name from "../../../Name"

import BackgroundImage from "../../../BackgroundImage"
import bg from "./assets/current-city-bg.jpg"
// import { useEffect, useState } from "react"
// import oneCall from "../../../../apis/onecall"

// const Melbourne_GEO = {
//   lat: -37.8142176,
//   lon: 144.9631608,
// }

// const UNITS = 'metric'
// const APP_ID = '8e1fbd5b2a10e5373d0c29c49669467c'

//- CurrentCity (CurrentCity 样式，背景图片和布局)
const CurrentCity = (
  {
    // temperature,
    // weather,
    // humidity,
    // wind,
    current,
    loading,
  }
) => 
// {

  // const [humidity,setHumidity] = useState()
  // const [wind,setWind] = useState()


  //状态提升从temperature到currentcity 声明一个状态，替换要变化的东西
  // const [weather, setWeather] = useState()
  // const [weatherLoading, setWeatherLoading] = useState(true)

  // const [temperature, setTemperature] = useState(17.5)
  // const [tempLoading, setTempLoading] = useState(true)

  // const [loading, setLoading] = useState(true)
  //temperature fetched from open weather api 后端调用api获取数据
  //副作用 函数，array发生改变，就执行一次fun array空，只执行一次，【不变】
  //array空，只执行一次，【不变】useEffect在组件第一次渲染时执行，或每次依赖项变化时执行

  // useEffect(() => {

    //fetch data from open weather api
    // fetch(`https://api.openweathermap.org/data/2.5/weather?id=524901&appid=${APP_ID}&lat=${Melbourne_GEO.lat}&lon=${Melbourne_GEO.lon}&units=${UNITS}`).then(response => response.json())

  //   oneCall()
  //     .then((data) => {
  //       // console.log(data)
  //       setTemperature(parseInt(data.current.temp))
  //       setWeather(data.current.weather[0].main)
  //       setHumidity(data.current.humidity)
  //       setWind(data.current.wind_speed)
  //       console.log(data)
  //     })
  //     .finally(() => {
  //       // setTempLoading(false)
  //       // setWeatherLoading(false)
  //       setLoading(false)
  //     })
  // }, [])

  // return
   (
    <BackgroundImage image={bg}>
      <div className="flex py-16 px-24 justify-between gap-48 relative">
        <div>
          {/* <button onClick={()=>setTemperature('12')}>debug</button> */}
          <Temperature
            className="text-white text-7xl text-center min-w-[300px]"
            // value={temperature}
            value={current?.temp ? parseInt(current.temp):null}
            // loading={weatherLoading}
            loading={loading}
          />
          <Weather
            // weather={weather}
            weather={current?.weather[0].main}
            // loading={tempLoading}
            loading={loading}
          />
          <Details
            humidity={current?.humidity}
            wind={current?.wind_speed}
            loading={loading}
          />
        </div>
        <Name>Melbourne</Name>
        <div className="h-[25px] bg-black/60 absolute bottom-0 inset-x-0" />
      </div>
    </BackgroundImage>
  )
// }
export default CurrentCity