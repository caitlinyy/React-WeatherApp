// 导入axios库,进行异步数据获取的示例。它的功能是通过调用OpenWeatherMap API来获取澳大利亚城市的地理位置信息，并打印出每个城市的名称、纬度和经度
//导入axios库,以便在后续的代码中使用axios进行HTTP请求。
const axios = require('axios')

//定义城市数组：数组包含了需要获取地理位置信息的澳大利亚城市的名称
const CITIES = [
  'Melbourne','Sydney','Brisbane',
  'Perth','Hobart','Adelaide','Darwin'
]

//定义异步函数main：
const main = async()=>{
  // console.log('hello')
  console.log('CITIES',CITIES)

  //获取所有城市cities地理位置信息,用数组的map方法遍历城市数组，对于每个城市，使用axios库发起一个GET请求到OpenWeatherMap API来获取地理位置信息
  const fetchGeos = CITIES.map((name)=>axios
    .get('https://api.openweathermap.org/geo/1.0/direct',{
      //参数包括查询城市名称、限制结果数量为1以及API密钥。
      params: {
      q:`${name},Australia`,
      limit:1,
      appid:'cb2090ac2337df16d084f36f5d60c73e'
      },
    })
    // 获取到的结果通过.then方法传递给后续的Promise处理
    .then((response)=>response.data)
)

  // 并行获取所有城市的地理位置信息,用Promise.all方法对fetchGeos数组中的所有Promise进行并行处理，并等待所有Promise都完成。结果将保存在result变量中
  const result = await Promise.all(fetchGeos)

  // console.log('result',result)
  //打印结果,遍历result数组中的每个元素，每个元素都是一个包含城市地理位置信息的数组。通过打印每个元素的name、lat和lon属性，将城市名称、纬度和经度输出到控制台
  result.forEach((item)=> console.log(item[0].name,item[0].lat,item[0].lon))
}
// 执行调用main函数，触发整个代码的执行
main()