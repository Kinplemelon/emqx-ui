import { App } from 'vue'
import Button from './Button'
import Input from './Input'
import Row from './Row'
import Col from './Col'
import Container from './Container'
import Aside from './Aside'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import Select from './Select'
import Option from './Option'
import Switch from './Switch'
import Form from './Form'
import FormItem from './FormItem'
import Table from './Table'
import TableColumn from './TableColumn'
import Message from './Message'
import Card from './Card'
import Pagination from './Pagination'

interface VueWindow extends Window {
  Vue?: App
}

const components = [
  Button,
  Input,
  Row,
  Col,
  Container,
  Aside,
  Header,
  Footer,
  Main,
  Select,
  Option,
  Switch,
  Form,
  FormItem,
  Table,
  TableColumn,
  Message,
  Card,
  Pagination,
]

const install = (Vue: App) => {
  components.map(component => Vue.component(component.name, component))
}

const _window: VueWindow = window

if (typeof _window !== 'undefined' && _window.Vue) {
  install(_window.Vue)
}

const packages = {
  install,
  Button,
  Input,
  Row,
  Col,
  Container,
  Aside,
  Header,
  Footer,
  Main,
  Select,
  Option,
  Switch,
  Form,
  FormItem,
  Table,
  TableColumn,
  Message,
  Card,
  Pagination,
}

export default packages
