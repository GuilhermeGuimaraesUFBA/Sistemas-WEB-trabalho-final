import './login.css'
import heroesImg from '../../renderer/heroes.png'
import { FiLogIn } from 'react-icons/fi'
import { Link } from '../../components/Link'
import { Logo } from '../../components/Logo'

export { Page }

function Page() {
  return (
    <div className="logon-container">
      <section className="form">
        <Logo />

        <form>
          <h1>Faça seu login</h1>

          <input
            placeholder="E-mail"
            value=""
            // onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link
            icon={<FiLogIn size={16} color="#0C356A" />}
            description="Não tenho um cadastro"
            href="/register"
          />
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  )
}
