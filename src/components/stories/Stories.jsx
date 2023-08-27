import { useContext } from 'react'
import { authContext } from '../../context/authContext'

const storiesData = [
  {
    id: 1,
    name: 'Hakki Rabah',
    image: 'https://images.pexels.com/photos/1482193/pexels-photo-1482193.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 2,
    name: 'Jhon Doe',
    image: 'https://images.pexels.com/photos/16903039/pexels-photo-16903039/free-photo-of-paysage-rochers-colline-riviere.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 3,
    name: 'Jhon Doe',
    image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 4,
    name: 'Jhon Doe',
    image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600'
  }

]
const Stories = () => {
  const { currentUser } = useContext(authContext)
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePicture} alt="image-story" />
        <span>{currentUser.userName}</span>
        <button>+</button>
      </div>
      {
        storiesData.map(str => (
          <div className='story' key={str.id}>
            <img src={str.image} alt="image-story" />
            <span>Jhon Doe</span>
          </div>
        ))
      }
    </div>
  )
}

export default Stories
