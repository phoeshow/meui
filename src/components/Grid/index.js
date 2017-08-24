import Container from './Container'
import Row from './Row'
const Grid = {}

Grid.install = Vue => {
  Vue.component(Container.name, Container)
  Vue.component(Row.name, Row)
}
export default Grid
