const Suggestion = ({ name, image }) => {
  return (
    <>
      <div className="user">
        <div className="user-info">
          <img src="https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=600" alt="user-avatar" />
          <span>Jhon Doe</span>
        </div>
        <div className="buttons">
          <button>Follow</button>
          <button>Desmiss</button>
        </div>
      </div>
    </>
  )
}

export default Suggestion
