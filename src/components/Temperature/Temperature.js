const Temperature = ({
  value,
  className,
  loading,
}
) => (
  // <div className="text-white text-7xl text-center">
  <div className={className}>
    {/* {`${value}°`} */}
    {loading ? '...' : `${value}°`}
  </div>
)
export default Temperature

// import { useState } from "react"

// const Temperature =(
//   // value是传进来的值，要提出去
//   {
//   value,
//   className
// }
// )=>{
//   const [temperature,setTemperature]=useState()
//   return(
//   <div className={className}>
//     {`${temperature}°`}
//   </div>
// )
// }

// export default Temperature