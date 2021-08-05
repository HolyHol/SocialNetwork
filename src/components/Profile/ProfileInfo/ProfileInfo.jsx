import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://sun9-11.userapi.com/impg/sfY7uImuGJcYYKES-3tlLIj_BVAz8nuj0Mr2eg/i953eESMJeg.jpg?size=1366x308&quality=96&sign=802b1a376e67bc5d6e93f2dda04fe554&type=album'></img>
      </div>
      <div className={style.descriptionBlock}>
        <img src='https://sun9-36.userapi.com/impg/nJxdhm9W2WjEZA_D5tfOx7FbCJYasJ7JlwivCQ/z43SxUkDZFM.jpg?size=828x812&quality=96&sign=5bf41195a4a320cb594a8d307f363d99&type=album'></img>
        description
      </div>
    </div>
  )
}

export default ProfileInfo;
