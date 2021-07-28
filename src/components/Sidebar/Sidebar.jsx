import style from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <nav className={style.sidebar}>
      <div className={style.item}>
        <a href='/profile'> Profile</a>
      </div>
      <div className={style.item}>
        <a href='/messages'>Messages</a>
      </div>
      <div className={style.item}>
        <a href='/news'>News</a>
      </div>
      <div className={style.item}>
        <a href='/music'>Music</a>
      </div>
      <div className={style.item}>
        <a href='/settings'>Settings</a>
      </div>
    </nav>
  );
}

export default Sidebar;
