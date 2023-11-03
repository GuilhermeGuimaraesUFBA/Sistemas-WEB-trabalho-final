import './profile.css'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import { Logo } from '../../components/Logo'
import { Link } from '../../components/Link'

export { Page }

function Page() {
  const incidents = [
    {
      id: 1,
      title: 'Filhotinhos encontrados',
      description: 'Alguns filhotinhos foram encontrados na estrada.',
      value: 30,
    },
  ]

  return (
    <div className="profile-container">
      <header>
        <Logo />
        <span>Bem vinda, Aubrigo Aunimais</span>

        <Link
          className="button"
          href="/incident"
          description="Cadastrar novo caso"
        />
        <button>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>
      <h1>Casos cadastrados</h1>
      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </p>

            <button>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
