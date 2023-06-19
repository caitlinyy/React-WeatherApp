Step 1: Break the UI into a component hierarchy
Step 2: Build a static version in React
- App (渲染App的样式，背景图片和布局)
  - WeatherCard (渲染 WeatherCard的样式，细节样式 + 布局)
    - CurrentCity (CurrentCity 样式，背景图片和布局)
      - **Temperature** (渲染Temperature 样式，细节样式)
      - Weather (渲染 Weather 样式细节样式)
      - Meta (渲染 Meta 样式，布局)
        - Humidity (渲染 Humidity样式，细节样式)
        - Wind (渲染 Wind 样式，细节样式)
      - **Name** (渲染 Name 样式，细节样)
    - OtherCities (OtherCities 样式，布局和统筹所有cities)
      -City[] (渲染 City 样式，布局)
        - **Name** (渲染 Name 样式，细节样式)
        - **Temperature** (渲染 Temperature 样式，细节样式)
        - **WeatherIcon** (渲染 WeatherIcon 样式，细节样式)
    - Forecast (渲染 Forecast 样式，布局和统筹所有 days of week)
      - Day0fWeek[] (渲染 Day0fWeek 样式，布局)
      - **Name** (渲染 Name 样式，细节样式)
      - **WeatherIcon** (渲染 WeatherIcon 样式，细节样式)
      - **Temperature** (渲染 Temperature 样式，细节样式)

(Global Components)
- Temperature
- WeatherIcon
- Name
- SubSection
- BackgroundImage

MUI ui库尽量不用

可读
可维护
可复用

- 按照责任划分组件
- 按照复用划分组件

state控制页面状态变化 渲染
一个或多个页面状态
每个state对应着至少一处ui变化
每一处ui变化都对应着一个state

将写法固定下来，形成肌肉记忆

每一处调取api都对应着一个effect

验证state 位置

子传父，props
父传子，state lifting 到父类组件

兄弟相传，state lifting 传到最小公共父类组件
current city 和forecast 传到weatherCard

const CITIES = [
  { name: 'Melbourne', lat: -37.8142176, lon: 144.9631608 },
  { name: 'Sydney', lat: -33.8698439, lon: 151.2082848 },
  { name: 'Brisbane City', lat: -27.4689682, lon: 153.0234991 },
  { name: 'Perth', lat: -31.9558964, lon: 115.8605801 },
  { name: 'Hobart', lat: -42.8825088, lon: 147.3281233 },
  { name: 'Adelaide', lat: -34.9281805, lon: 138.5999312 },
  { name: 'Darwin', lat: -12.46044, lon: 130.8410469 }
]


1.Readable，Maintainable， Reusable
2.SOLID
3.Component，Declarative
4.React 哲学
5.肌肉记忆
 - 责任划分组件
 - 组建名称重复就有可能复用
 - UI变化对应着 state
 - API 请求对应着 effect
 - 父传子 Props，子传父 State lifting，兄弟相传 State lifting
6.不要 Copy Paste6.
7.不要写 if else
8.不要过度设计
9.就近维护原则