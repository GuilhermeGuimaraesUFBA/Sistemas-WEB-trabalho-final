import './profile.css'
import { FiMapPin, FiPhone, FiPower, FiTrash2 } from 'react-icons/fi'
import { Logo } from '../../components/Logo'
import { Link } from '../../components/Link'
import { incidents } from './incidents'

export { Page }

function Page() {
  let user
  if (typeof window !== 'undefined') {
    user = localStorage.getItem('user')
  }

  return (
    <div className="profile-container">
      <header>
        <Logo />
        <span>{user ? `Bem vinda, ${user}` : `Boas vindas!`}</span>

        {user && (
          <>
            <Link
              className="button"
              href="/incident"
              description="Cadastrar novo caso"
            />
            <button>
              <FiPower size={18} color="#e02041" />
            </button>
          </>
        )}
      </header>
      <h1>Casos cadastrados</h1>
      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <div className="image-container">
              <img src={incident.image} />
            </div>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>LOCALIZAÇÃO:</strong>
            <p>
              <FiMapPin /> {incident.location}
            </p>

            <strong>CONTATO:</strong>
            <p>
              <FiPhone /> {incident.contato}
            </p>

            {user && (
              <button>
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
