import OpenWeatherMapAPI from "../libs/OpenWeatherMapAPI"

// https://api.openweathermap.org/data/2.5/group?appid=cb2090ac2337df16d084f36f5d60c73e&id=2158177&units=metric
const BASE_URL = "https://api.openweathermap.org/data/2.5"
const UNITS = 'metric'

const APP_ID = 'cb2090ac2337df16d084f36f5d60c73e'

const CITIES = [
  { name: "Melbourne", id: 2158177 },
  { name: "Sydney", id: 2147714 },
  { name: "Brisbane", id: 2174003 },
  { name: "Perth", id: 2063523 },
]

const group = () =>
  fetch(`${BASE_URL}/group?appid=${APP_ID}&id=${CITIES.map(({id})=>id).join()}&units=${UNITS}`)
    .then((response) => response.json())

// const group = () => OpenWeatherMapAPI
//   .get("/group", {
//     params: {
//       id: CITIES.map((city) => city.id).join(","),
//     },
//   })
//   .then((response) => response.json())

export default group