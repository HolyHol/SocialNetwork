import style from './Post.module.css'

const Post = (props) => {
  return (
    <div className={style.item}>
      <img src='https://sun9-36.userapi.com/impg/nJxdhm9W2WjEZA_D5tfOx7FbCJYasJ7JlwivCQ/z43SxUkDZFM.jpg?size=828x812&quality=96&sign=5bf41195a4a320cb594a8d307f363d99&type=album'></img>
      {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  );
}

export default Post;
