import './login.css'
import heroesImg from '../../renderer/heroes.png'
import logoImg from '../../renderer/logo.svg'
import { Link } from '../../renderer/Link'
import { FiLogIn } from 'react-icons/fi'

export { Page }

function Page() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form>
          <h1>Faça seu logon</h1>

          <input
            placeholder="Seu ID"
            value=""
            // onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link href="/register" className="back-link">
            <FiLogIn size={16} color="#E02041" />
            Não tenho um cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  )
}
