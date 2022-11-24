import { Header } from '../components/Header'
import homeImg from '../assets/grazielle.jpg'

export function Inicio() {
  return (
    <div>
      <Header title="Hello, Seja Bem-vindo ao meu site" image={homeImg} />
    </div>
  )
}