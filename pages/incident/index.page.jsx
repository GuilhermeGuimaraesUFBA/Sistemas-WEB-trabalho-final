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

  const submitIncident = (e) => {
    e.preventDefault()
    const incidentObject = {
      title: e.target.title.value,
      description: e.target.description.value,
      location: e.target.location.value,
      image: e.target.image.value,
    }

    if (caso?.id) {
      localStorage.setItem('editedItem', JSON.stringify(incidentObject))
    } else {
      localStorage.setItem('addedItem', JSON.stringify(incidentObject))
    }

    window.location.href = '/'
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

        <form onSubmit={submitIncident}>
          <input
            placeholder="Título do caso"
            value={caso?.title}
            type="text"
            name="title"
            id=""
          />
          <textarea
            placeholder="Descrição"
            value={caso?.description}
            type="email"
            name="description"
            id=""
          />
          <input
            placeholder="Localização"
            value={caso?.location}
            name="location"
          />
          <h3 className="imagenstext">Adicione a(s) imagem(s) do caso</h3>
          {caso?.id && <img src={caso?.image} />}
          <input placeholder="" name="image" type="file" />

          <button className="button" type="submit">
            {caso?.id ? 'Editar' : 'Cadastrar'}
          </button>
        </form>
      </div>
    </div>
  )
}
