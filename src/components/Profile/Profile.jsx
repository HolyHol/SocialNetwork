import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return (
    <div>
        <div> 
           <img src='https://sun9-11.userapi.com/impg/sfY7uImuGJcYYKES-3tlLIj_BVAz8nuj0Mr2eg/i953eESMJeg.jpg?size=1366x308&quality=96&sign=802b1a376e67bc5d6e93f2dda04fe554&type=album'></img>
        </div>
        <div>
          ava + description 
        </div>
        <MyPosts />
      </div>
  );
}

export default Profile; 
