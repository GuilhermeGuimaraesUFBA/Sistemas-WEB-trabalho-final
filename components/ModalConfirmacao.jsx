import propTypes from 'prop-types'
import './modal.css'

export { ModalConfirmacao }

ModalConfirmacao.propTypes = {
  isOpen: propTypes.bool,
  setOpen: propTypes.any,
}

function ModalConfirmacao({ isOpen, setOpen }) {
  if (!isOpen) return null

  return (
    <div className="modal">
      <div className="modal-content">
        <div>
          <h2>Obrigado pelo interesse</h2>
        </div>
        <div className="confirmacao-container">
          <h3>Entraremos em contato com você através do número cadastrado.</h3>
          <button className="button-salvar" onClick={() => setOpen(false)}>
            Ok
          </button>
        </div>
      </div>
    </div>
  )
}
