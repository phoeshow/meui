// 组件安装器
import './style/index.scss'
import Hello from './components/Hello'
import Card from './components/Card'
import Grid from './components/Grid'

let componentsList = {
  Hello,
  Card,
  Grid
}
let MEUI = Vue => {
  Object.keys(componentsList).forEach(key => {
    Vue.use(componentsList[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(MEUI)
}
export default MEUI
