import './incident.css'
import logoImg from '../../renderer/logo.svg'
import { Link } from '../../renderer/Link'
import { FiArrowLeft } from 'react-icons/fi'

export { Page }

function Page() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>
          <Link href="/profile" className="back-link">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>

        <form>
          <input
            placeholder="Título do caso"
            //   value={title}
            //   onChange={e => setTitle(e.target.value)}
            type="text"
            name=""
            id=""
          />
          <textarea
            placeholder="Descrição"
            //   value={description}
            //   onChange={e => setDescription(e.target.value)}
            type="email"
            name=""
            id=""
          />
          <input
            placeholder="Valor em reais"
            //   value={value}
            //   onChange={e => setValue(e.target.value)}
          />

          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
}
