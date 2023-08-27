import { createContext, useEffect, useState } from 'react'

export const authContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(window.localStorage.getItem('user')) || null
  )

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser))
  }, [currentUser])

  const login = () => {
    // connect to backend
    setCurrentUser({
      id: 1,
      userName: 'Jhon Doe',
      profilePicture: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=600'
    })
  }
  const logout = () => {
    // connect to backend
    setCurrentUser(null)
    window.localStorage.clear('user')
  }

  return <authContext.Provider value={{ currentUser, login, logout }}>
    {children}
  </authContext.Provider>
}
