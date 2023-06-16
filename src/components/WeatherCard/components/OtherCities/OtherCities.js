import { useEffect, useState } from "react"
import SubSection from "../../../Subsection"
import City from "../OtherCities/components/City"
import group from "../../../../apis/group"

// const OTHER_CITIES = [
//   { name: "Melbourne", temperature: 14, weather: { code: '04n', name: 'Clouds', } },
//   { name: "Sydney", temperature: 19, weather: { code: '04n', name: 'Clouds', } },
//   { name: "Melbourne", temperature: 14, weather: { code: '10d', name: 'Rain', } },
//   { name: "Brisbane", temperature: 14, weather: { code: '01d', name: 'Clear', } },
//   { name: "Perth", temperature: 14, weather: { code: '04n', name: 'Clouds', } },
// ]

const OtherCities = () => {
  const [others, setOthers] = useState()
  const [loading, setLoading] = useState(true)

  //数据从api来用useEffect
  useEffect(() => {
    group()
      .then((data) => {
        // console.log(data)
        const list = data.list.map(({ name, main, weather }) => ({
          name,
          temperature: parseInt(main.temp),
          weather: {
            code: weather[0].icon,
            name:weather[0].main,
          },
        }))
        setOthers(list)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <SubSection title="Other Cities">
      {loading && <div>Loading</div>}
      {/* <City name="Melbourne" temperature={14} weather={{code:'04n', name:'Clouds'}}/> */}
      {/* <City name="Perth"  temperature={19} weather={{code:'04n', name:'Clouds'}}/>
      <City name="Sydney"  temperature={18} weather={{code:'10d', name:'Rain'}}/>
      <City name="Brisbane"  temperature={17} weather={{code:'01d', name:'Clear'}}/> */}
      {/* {OTHER_CITIES.map(({ name, temperature, weather }) => ( */}
      {others?.map(({ name, temperature, weather }) => (
        <City
          key={name}
          name={name}
          temperature={temperature}
          weather={weather}
        />
      ))}
    </SubSection>
  )
}

export default OtherCities