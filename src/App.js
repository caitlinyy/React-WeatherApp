import WeatherCard from './components/WeatherCard'
import bg from './assets/app-bg.png'
import BackgroundImage from './components/BackgroundImage'

// (渲染 WeatherCard的样式，背景图片，细节样式 + 布局)
const App = () =>(
  <BackgroundImage image={bg}>
  <div 
  // style={{
  //   backgroundImage:`url(${bg})`,
  // }}
  className="h-screen flex justify-center items-center">
    <WeatherCard />
  </div>
  </BackgroundImage>
)
// h-screen 水平居中 高度

export default App
















// import logo from './logo.svg';
// import './App.css';

// //component 一个返回一个react element html方法叫component

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
