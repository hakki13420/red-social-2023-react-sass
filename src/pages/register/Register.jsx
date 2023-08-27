import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>hello world!</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt excepturi reiciendis voluptas nisi nihil aut eos sunt, totam laboriosam doloremque eum quisquam optio asperiores!</p>
          <span>Dont you have a compt?</span>
          <Link to='/login'>
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="#">
            <input type="text" placeholder="full name" />
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
