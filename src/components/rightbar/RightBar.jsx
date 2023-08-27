import LatestActivity from './LatestActivity'
import OnlineFriends from './OnlineFriends'
import Suggestion from './Suggestion'

const RightBar = () => {
  const i = 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=600'
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <h1>Suggesyio for you</h1>
          <Suggestion name='Jhon Doe' image={i}/>
          <Suggestion name='Jhon Doe' image={i}/>
          <Suggestion name='Jhon Doe' image={i}/>
        </div>
        <div className="item">
          <h1>Latest Activities</h1>
          <LatestActivity name='Jhon Doe' image={i} action='changed their cover picture' time='1min ago'/>
          <LatestActivity name='Jhon Doe' image={i} action='changed their cover picture' time='1min ago'/>
          <LatestActivity name='Jhon Doe' image={i} action='changed their cover picture' time='1min ago'/>
        </div>
        <div className="item">
          <h1>Online Friends</h1>
          <OnlineFriends name='Jhon Doe' image={i} />
          <OnlineFriends name='Jhon Doe' image={i} />
          <OnlineFriends name='Jhon Doe' image={i} />
        </div>
      </div>
    </div>
  )
}

export default RightBar
