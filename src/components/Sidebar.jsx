import style from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <nav className={style.sidebar}>
        <div className={style.item}>
          <a> Profile</a>
        </div>
        <div className={style.item}>
          <a>Messages</a>
        </div>
        <div className={style.item}>
          <a>News</a>
        </div>
        <div className={style.item}>
          <a>Music</a>
        </div>
        <div className={style.item}>
          <a>Settings</a>
        </div>
      </nav>
  );
}

export default Sidebar;
