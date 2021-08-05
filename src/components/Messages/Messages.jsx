import style from './Messages.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Messages = (props) => {
  const dialogsElements = props.state.dialogsData.map(dialog => <DialogsItem name={dialog.name} id={dialog.id} />)
  const messageElements = props.state.messagesData.map(message => <Message message={message.message} />)

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        {messageElements}
      </div>
    </div>
  );
}

export default Messages;
