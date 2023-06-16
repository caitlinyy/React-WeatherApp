// import { useEffect, useState } from "react"
// import getWeather from "../../../../../../apis/getWeather"

const Weather = (
  {weather,loading,}
) => 

  // {const [weather, setWeather] = useState()
  // const [loading, setLoading] = useState(true)
  // useEffect(() => 
  // {
  //   getWeather()
  //     .then((data) => {
  //       // console.log(data);
  //       setWeather(data.weather[0].main)
  //     })
  //     .finally(() => {
  //       setLoading(false)
  //     })
  //     .then()
  // }, [])
  // return 
  (
    <div className="text-2xl  text-center ">
      <span className="text-white/70 mt-2 tracking-widest">
        {/* 样式和布局责任分开 */}
        {loading ? '...' : weather}
      </span>
    </div>
  )
// }

export default Weather