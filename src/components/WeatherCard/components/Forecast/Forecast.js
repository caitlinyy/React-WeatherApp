
import SubSection from "../../../Subsection"
import DayOfWeek from "../Forecast/components/DayOfWeek"
// import { useEffect, useState } from "react"
// import oneCall from "../../../../apis/onecall"

// const FORECAST = [
//   { name: 'Mon', weather: { code: '11d', name: 'Thunderstorm' }, temperature: '18' },
//   { name: 'Tue', weather: { code: '01d', name: 'Clear' }, temperature: '21' },
//   { name: 'Wed', weather: { code: '03d', name: 'Clouds' }, temperature: '16' },
//   { name: 'Thu', weather: { code: '09d', name: 'Rain' }, temperature: '15' },
//   { name: 'Fri', weather: { code: '09d', name: 'Rain' }, temperature: '14' },
// ]

// const WEEK_DAYS = ['SUN', 'MON', 'Tue', 'Wed', 'Thu', 'Fri', 'SAT']

const Forecast = (
  {
    forecast,
    loading,
  }
) => 
// {
  // const [forecast, setForecast] = useState()
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   oneCall()
  //     .then((data) => {
  //       // 在这里使用获取到的数据进行处理或执行相应的逻辑
  //       // console.log(data);
  //       const daily = data.daily.slice(1,6).map((day) => ({
  //         name: WEEK_DAYS[new Date(day.dt * 1000).getDay()],
  //         weather: {
  //           code: day.weather[0].icon,
  //           name: day.weather[0].main,
  //         },
  //         temperature: Number.parseInt(day.temp.day),
  //       }))

  //       setForecast(daily)
  //     })
  //     .finally(() => {
  //       setLoading(false)
  //     })
  // }, [])

  // return
   (
    <SubSection title="Forecast">
      {loading && <div>Loading</div>}

      {/* 按钮用于调试。当点击按钮时，setForecast函数会被调用，并将FORECAST数组作为新的forecast值。重新渲染组件，从而遍历和渲染FORECAST数组中的数据 */}
      {/* <button onClick={()=>setForecast(FORECAST)}>debug</button> */}
      <div className="flex gap-4 justify-between">

        {forecast?.map(({ name, weather, temperature }) => (
          <DayOfWeek
            key={name}
            name={name}
            weather={weather}
            temperature={temperature}
          />
        ))}
        {/* <DayOfWeek name="Mon" weather={{code:'11d',name:'Thunderstorm'}} temperature={18}/>
      <DayOfWeek name="Tue" weather={{code:'01d',name:'Clear'}} temperature={21} />
      <DayOfWeek name="Wed" weather={{code:'03d',name:'Clouds'}} temperature={16} />
      <DayOfWeek name="Thu" weather={{code:'09d',name:'Rain'}} temperature={15} />
      <DayOfWeek name="Fri" weather={{code:'09d',name:'Rain'}} temperature={14} /> */}

      </div>
    </SubSection>
  )
// }
export default Forecast