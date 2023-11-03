import './incident.css'
import { FiArrowLeft } from 'react-icons/fi'
import { Logo } from '../../components/Logo'
import { Link } from '../../components/Link'

export { Page }

function Page() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <Logo />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>
          <Link
            icon={<FiArrowLeft size={16} color="#0C356A" />}
            href="/profile"
            className="back-link"
            description="Voltar para home"
          />
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
            placeholder="Localização"
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
