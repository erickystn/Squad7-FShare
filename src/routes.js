import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ContentMain from './pages/ContentMain'
import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer'

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Menu />

      <Switch>
        <Route exact path="/" component={ContentMain} />
        <Route path="/sobre" componet={ContentMain} />
      </Switch>

      <Footer />
    </BrowserRouter>
  )
}

export default Routes 