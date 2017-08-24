import Card from './Card'
import CardTitle from './CardTitle'
import CardMedia from './CardMedia'
import CardContent from './CardContent'
import CardAction from './CardAction'

Card.install = (Vue) => {
  Vue.component(Card.name, Card)
  Vue.component(CardTitle.name, CardTitle)
  Vue.component(CardMedia.name, CardMedia)
  Vue.component(CardContent.name, CardContent)
  Vue.component(CardAction.name, CardAction)
}

export default Card
