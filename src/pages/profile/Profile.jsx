import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import PinterestIcon from '@mui/icons-material/Pinterest'
import TwitterIcon from '@mui/icons-material/Twitter'
import PlaceIcon from '@mui/icons-material/Place'
import LanguageIcon from '@mui/icons-material/Language'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Posts from '../../components/posts/Posts'

const Profile = () => {
  return (
    <div className="profile">
      <div className="container">

        <div className="images">
          <img src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=600" className ='image-cover' alt="image-cover" />
          <img src="https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=600" className ='image-profile' alt="image-profile" />
        </div>
        <div className="profile-container">

          <div className="top">
            <span className='name'>
            Jhon Doe
            </span>
            <div className="info">
              <div className="location">
                <PlaceIcon/>
                <span>Algeria</span>
              </div>
              <button>Follow</button>
              <div className="contact">
                <LanguageIcon/>
                <span>Hakki.dev</span>

              </div>
            </div>
          </div>
          <div className="bottom">

            <div className="left">
              <FacebookTwoToneIcon/>
              <LinkedInIcon/>
              <InstagramIcon/>
              <PinterestIcon/>
              <TwitterIcon/>

            </div>
            <div className="right">
              <EmailOutlinedIcon/>
              <MoreVertIcon/>
            </div>
          </div>
        </div>

        <Posts />
      </div>

    </div>
  )
}

export default Profile
