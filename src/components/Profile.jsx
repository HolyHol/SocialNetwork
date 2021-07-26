import style from './Profile.module.css'

const Profile = () => {
  return (
    <div className={style.content}>
        <div> 
           <img src='https://images.wallpaperscraft.ru/image/nebo_oblaka_rozovyy_92617_1366x768.jpg'></img>
        </div>
        <div>
          ava + description 
        </div>
        <div className={style.item}>
          my posts
          <div>
            new post
          </div>
          <div>
            post 1
          </div>
          <div>
            post 2
          </div>
        </div>
      </div>
  );
}

export default Profile; 
