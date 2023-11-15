import './incident.css'
import { FiArrowLeft } from 'react-icons/fi'
import { Logo } from '../../components/Logo'
import { Link } from '../../components/Link'

export { Page }

function Page() {
  let caso
  if (typeof window !== 'undefined') {
    caso = JSON.parse(localStorage.getItem('edit'))
  }

  console.log(caso)

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <Logo />
          {!caso?.id && (
            <>
              <h1>Cadastrar novo caso</h1>
              <p>
                Descreva o caso detalhadamente para encontrar um herói para
                resolver isso.
              </p>
            </>
          )}
          <Link
            icon={<FiArrowLeft size={16} color="#0C356A" />}
            href="/"
            className="back-link"
            description="Voltar para home"
          />
        </section>

        <form>
          <input
            placeholder="Título do caso"
            value={caso?.title}
            //   onChange={e => setTitle(e.target.value)}
            type="text"
            name=""
            id=""
          />
          <textarea
            placeholder="Descrição"
            value={caso?.description}
            //   onChange={e => setDescription(e.target.value)}
            type="email"
            name=""
            id=""
          />
          <input
            placeholder="Localização"
            value={caso?.location}
            //   onChange={e => setValue(e.target.value)}
          />
          <h3 className="imagenstext">Adicione a(s) imagem(s) do caso</h3>
          {caso?.id && <img src={caso?.image} />}
          <input
            placeholder=""
            // value={caso.image}
            //   onChange={e => setValue(e.target.value)}
            type="file"
          />

          <button type="submit" className="button">
            {caso?.id ? 'Editar' : 'Cadastrar'}
          </button>
        </form>
      </div>
    </div>
  )
}
