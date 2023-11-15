import './login.css'
import heroesImg from '../../renderer/heroes.png'
import { FiLogIn } from 'react-icons/fi'
import { Link } from '../../components/Link'
import { Logo } from '../../components/Logo'
import { users } from './usuarios'
import { useUserContext } from '../../renderer/useUserContext'

export { Page }

function Page() {
  const userContext = useUserContext()
  console.log('usercontext', userContext)
  const onClickEntrar = (event) => {
    event.preventDefault()
    const [user] = users.filter(
      (item) => item.email === event.target.email.value
    )
    console.log(user)

    localStorage.setItem('user', user.name)

    setTimeout(10)

    userContext.setUser(user)

    window.location.href = '/'
  }

  return (
    <div className="logon-container">
      <section className="form">
        <Logo />

        <form onSubmit={onClickEntrar}>
          <h1>Faça seu login</h1>

          <input type="email" placeholder="E-mail" name="email" />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link
            className="back-link"
            icon={<FiLogIn size={16} color="#0C356A" />}
            description="Não tenho um cadastro"
            href="/register"
          />
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  )
}
