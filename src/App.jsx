import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import NavBar from './components/navbar/NavBar'
import LeftBar from './components/leftbar/LeftBar'
import RightBar from './components/rightbar/RightBar'
import Profile from './pages/profile/Profile'
import { themeContext } from './context/themeContext'
import { useContext } from 'react'
import { authContext } from './context/authContext'

const Layout = () => {
  const { theme } = useContext(themeContext)

  return (
    <div className={`layout theme-${theme}`}>
      <NavBar/>
      <LeftBar/>
      <Outlet/>
      <RightBar/>
    </div>
  )
}

function App () {
  const { currentUser } = useContext(authContext)

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) return <Navigate to='/login' />
    return children
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProtectedRoute><Layout/></ProtectedRoute>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/profile',
          element: <Profile/>
        }
      ]
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/register',
      element: <Register/>
    }

  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
