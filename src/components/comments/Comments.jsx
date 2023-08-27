import { useContext } from 'react'
import { authContext } from '../../context/authContext'

const commentsData = [
  {
    id: 1,
    userName: 'Jhon Doe',
    userId: 1,
    profilePicture: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=600',
    comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio illum voluptates quasi magni explicabo ab recusandae ullam maiores, neque velit est debitis, molestiae earum excepturi, hic ut veniam iste.'
  },
  {
    id: 2,
    userName: 'Jhon Doe',
    userId: 1,
    profilePicture: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=600',
    comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio illum voluptates quasi magni explicabo ab recusandae ullam maiores, neque velit est debitis, molestiae earum excepturi, hic ut veniam iste.'
  }
]

const Comments = () => {
  const { currentUser } = useContext(authContext)

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePicture} alt="profile-picture" />
        <input type="text" placeholder="write a comment..." />
        <button>Send</button>
      </div>
      {
        commentsData.map(comment => (
          <div key={comment.id} className="comment">
            <img src={comment.profilePicture} alt="image-user" />
            <div className="body-comment">
              <span className="name">{comment.userName}</span>
              <p>{comment.comment}</p>
            </div>
            <span>1 Hour ago</span>
          </div>
        ))
      }
    </div>
  )
}

export default Comments
