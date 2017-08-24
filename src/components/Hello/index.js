import Hello from './Hello'

Hello.install = Vue => {
  Vue.component(Hello.name, Hello)
}

export default Hello
