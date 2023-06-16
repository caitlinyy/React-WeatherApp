// import Humidity from "./components/Humidity"
// import Wind from "./components/Wind"
import Item from "./components/Item"

const Details = (
  {humidity,wind,loading,}
) =>
 // {if(loading){return(<div className="text-white/70">...</div>)}}
(
  <div className="flex gap-8 justify-center mt-8">
    {/* <Humidity /> */}
    {/* <Item title="HUMIDITY">{loading?'...': humidity} %</Item> */}
    <Item title="HUMIDITY" loading={loading}>{`${humidity} %`}</Item>

    <div className="w-[1px] bg-white/70" />

     {/* <Wind /> */}
    {/* <Item title="WIND">{loading?'...': wind} / KM</Item> */}
    <Item title="WIND" loading={loading}>{`${wind} KM / H`}</Item>


  </div>
)

export default Details