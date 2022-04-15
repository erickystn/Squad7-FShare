import { Switch } from 'react-router-dom'
import Mentorias from '../pages/Mentorias'
import Cadastrar from '../pages/Cadastrar'
import Perfil from '../pages/Perfil'
import Inicio from '../pages/Inicio'
import SelecionarSkill from '../pages/Cadastrar/selecionarSkill'
import Route from './Route'


export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Inicio} />
      <Route exact path="/cadastrar" component={Cadastrar} />
      <Route exact path="/skills/:id" component={SelecionarSkill} />
      <Route exact path="/perfil/:id" component={Perfil} />
      <Route exact path="/mentorias" component={Mentorias}  />
    </Switch>
  )
}