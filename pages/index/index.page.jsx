import './profile.css'
import { FiMapPin, FiPower, FiTrash2, FiEdit2,
  FiEdit3,  FiEdit } from 'react-icons/fi'
import { Logo } from '../../components/Logo'
import { Link } from '../../components/Link'
import { incidents } from './incidents'
import { Modal } from '../../components/Modal'
import { useState } from 'react'

export { Page }

function Page() {
  let user
  if (typeof window !== 'undefined') {
    user = localStorage.getItem('user')
  }

  const status_adocao = ['Disponível', 'Em entrevistas']

  const [modalOpen, setModalOpen] = useState(false)
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

            <strong>STATUS:</strong>
            <p>{incident.status}</p>

            {status_adocao.includes(incident.status) && (
              <button
                className="button-adotar"
                onClick={() => setModalOpen(true)}
              >
                Adotar
              </button>
            )}
            <button className='editbutton'>
                <FiEdit size={20} color="#a8a8b3" />
            </button>

            {user && (
              <button>
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
              
            )}
          </li>
        ))}
      </ul>
      <Modal isOpen={modalOpen} setOpen={setModalOpen} />
    </div>
  )
}
