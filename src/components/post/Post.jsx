import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import { useState } from 'react'
import Comments from '../comments/Comments'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false)
  const [comment, setComment] = useState(false)

  const handlComment = () => {
    setComment(!comment)
  }
  const handlLike = () => {
    setLiked(true)
  }
  return (
    <div key={post.id} className="post">
      <div className="header">
        <div className="user">
          <Link to='/profile'>
            <img src={post.profilePicture} alt="profile" />
          </Link>
          <div className="user-info">
            <span className="name">
              {post.userName}
            </span>
            <span className="time">
                        1min ago
            </span>
          </div>
        </div>
        <MoreHorizOutlinedIcon/>
      </div>
      <div className="body">
        <img src={post.image} alt="post-image" />
        <p>{post.content}</p>
      </div>
      <div className="footer">
        <div className="item">
          {!liked
            ? <FavoriteBorderOutlinedIcon onClick={handlLike}/>
            : <FavoriteOutlinedIcon/>
          }
          <span>12 likes</span>
        </div>
        <div className="item" onClick={handlComment}>
          <MessageOutlinedIcon />
          <span>120 comments</span>
        </div>
        <div className="item">
          <ShareOutlinedIcon/>
          <span>1 share</span>
        </div>
      </div>
      {comment && <Comments/>}
    </div>
  )
}

export default Post
