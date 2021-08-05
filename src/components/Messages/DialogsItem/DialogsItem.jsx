import style from './DialogsItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
  let path = '/messages/' + props.id;
  return (
    <div className={style.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogsItem; 
