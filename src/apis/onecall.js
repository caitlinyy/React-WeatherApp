// https://api.openweathermap.org/data/2.5/onecall?appid=cb2090ac2337df16d084f36f5d60c73e&lat=-37.8142176&lon=144.9631608&units=metric
const BASE_URL = "https://api.openweathermap.org/data/2.5"

const Melbourne_GEO = {
  lat: -37.8142176,
  lon: 144.9631608,
}

const UNITS = 'metric'

const APP_ID = 'cb2090ac2337df16d084f36f5d60c73e'

const oneCall = (
  // { onSuccess, onFinally, }
) => fetch(`${BASE_URL}/onecall?appid=${APP_ID}&lat=${Melbourne_GEO.lat}&lon=${Melbourne_GEO.lon}&units=${UNITS}`)
  .then((response) => response.json())
//{
// fetch(`https://api.openweathermap.org/data/2.5/weather?id=524901&appid=${APP_ID}&lat=${Melbourne_GEO.lat}&lon=${Melbourne_GEO.lon}&units=${UNITS}`)
//     .then(response => response.json())
//     .then((data) => {
//       // console.log(data)
//       // setTemperature(parseInt(data.main.temp))
//       onSuccess(parseInt(data.main.temp))
//     })
//     .finally(() => {
//       // setLoading(false)
//       onFinally()
//     })
//}
export default oneCall