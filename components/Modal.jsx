import propTypes from 'prop-types'
import './modal.css'
import { useState } from 'react'
import { ModalConfirmacao } from './ModalConfirmacao'

export { Modal }

Modal.propTypes = {
  isOpen: propTypes.bool,
  setOpen: propTypes.any,
}

function Modal({ isOpen, setOpen }) {
  const [contato, setContato] = useState('')
  const [modalConfirmacao, setModalConfirmacao] = useState(false)

  if (!isOpen) {
    if (modalConfirmacao) {
      return (
        <ModalConfirmacao
          isOpen={modalConfirmacao}
          setOpen={setModalConfirmacao}
        />
      )
    }
    return null
  }

  const formataContato = (input) => {
    const numeros = input.target.value.replace(/\D/g, '')

    const regex = /^(\d{0,2})(\d{0,5})(\d{0,4})$/
    const contatoFormatado = numeros.replace(regex, '($1) $2-$3')

    setContato(contatoFormatado)
  }

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <div>
            <h2>Preencha seus dados</h2>
          </div>
          <div>
            <form action="">
              <input type="text" placeholder="Nome" />
              <input
                type="text"
                placeholder="Contato"
                // value={contato}
                // onChange={(e) => formataContato(e)}
              />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="Estado" />
              <div className="buttons">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false)
                    setModalConfirmacao(true)
                  }}
                  className="button-salvar"
                >
                  Salvar
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="button-sair"
                >
                  Sair
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
