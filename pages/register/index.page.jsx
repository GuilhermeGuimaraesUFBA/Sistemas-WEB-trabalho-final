import './register.css'
import logoImg from '../../renderer/logo.svg'
import { Link } from '../../renderer/Link'
import { FiArrowLeft } from 'react-icons/fi'

export { Page }

function Page() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <Link href="/" className="back-link">
            <FiArrowLeft size={16} color="#E02041" />
            Já tenho um cadastro
          </Link>
        </section>

        <form>
          <input
            placeholder="Nome da ONG"
            type="text"
            id="name"
            //   value={name}
            //   onChange={e => setName(e.target.value)}
          />
          <input
            placeholder="E-mail"
            type="email"
            name=""
            id=""
            //   value={email}
            //   onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="WhatsApp"
            //   value={whatsapp}
            //   onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="Cidade"
              // value={city}
              // onChange={e => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              // value={uf}
              // onChange={e => setUf(e.target.value)}
              style={{ width: 80 }}
            />
          </div>

          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
}
