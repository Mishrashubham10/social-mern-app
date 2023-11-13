import './rightbar.scss';

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions for you</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/18928507/pexels-photo-18928507/free-photo-of-fireworks-in-the-dark-sky-with-a-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="User"
              />
              <span>Shubham Mishra</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/18928507/pexels-photo-18928507/free-photo-of-fireworks-in-the-dark-sky-with-a-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="User"
              />
              <span>Shubham Mishra</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        {/* Second Item */}
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/18928507/pexels-photo-18928507/free-photo-of-fireworks-in-the-dark-sky-with-a-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="User"
              />
              <p>
                <span>Shubham Mishra</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          {/* Other Activities */}
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/18928507/pexels-photo-18928507/free-photo-of-fireworks-in-the-dark-sky-with-a-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="User"
              />
              <p>
                <span>Shubham Mishra</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          {/* Activity */}
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/18928507/pexels-photo-18928507/free-photo-of-fireworks-in-the-dark-sky-with-a-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="User"
              />
              <p>
                <span>Shubham Mishra</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          {/* Activity */}
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/18928507/pexels-photo-18928507/free-photo-of-fireworks-in-the-dark-sky-with-a-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="User"
              />
              <p>
                <span>Shubham Mishra</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        {/* Friends */}
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/18928507/pexels-photo-18928507/free-photo-of-fireworks-in-the-dark-sky-with-a-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="User"
              />
              <div className="online" />
              <span>Shubham Mishra</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/18928507/pexels-photo-18928507/free-photo-of-fireworks-in-the-dark-sky-with-a-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="User"
              />
              <div className="online" />
              <span>Shubham Mishra</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/18928507/pexels-photo-18928507/free-photo-of-fireworks-in-the-dark-sky-with-a-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="User"
              />
              <div className="online" />
              <span>Shubham Mishra</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/18928507/pexels-photo-18928507/free-photo-of-fireworks-in-the-dark-sky-with-a-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="User"
              />
              <div className="online" />
              <span>Shubham Mishra</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/18928507/pexels-photo-18928507/free-photo-of-fireworks-in-the-dark-sky-with-a-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="User"
              />
              <div className="online" />
              <span>Shubham Mishra</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
