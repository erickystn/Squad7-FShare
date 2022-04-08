import { Switch } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Mentorias from '../pages/Mentorias'
import Cadastrar from '../pages/Cadastrar'
import Login from '../pages/Login'
import Inicio from '../pages/Inicio'
import Route from './Route'


export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Inicio} />
      <Route exact path="/cadastrar" component={Cadastrar} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} isPrivate />
      <Route exact path="/mentorias" component={Mentorias} isPrivate />
    </Switch>
  )
}