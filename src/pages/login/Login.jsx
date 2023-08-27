import { Link } from 'react-router-dom'
import { authContext } from '../../context/authContext'
import { useContext } from 'react'

const Login = () => {
  const { login } = useContext(authContext)
  const authenticate = () => {
    login()
  }
  return (
    <div className="login">
      <div className="card">

        <div className="left">
          <h1>hello world!</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt excepturi reiciendis voluptas nisi nihil aut eos sunt, totam laboriosam doloremque eum quisquam optio asperiores!</p>
          <span>Dont you have a compt?</span>
          <Link to='/register'>
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="#">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button onClick={authenticate}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
