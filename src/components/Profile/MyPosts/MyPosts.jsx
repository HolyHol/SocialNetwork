import style from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>
      <div className={style.heading}>
        my posts
      </div>
      <div className={style.item}>
        <Post message="Hello, it' me." />
        <Post message="I was wondering if after all these years you'd like to meet" />
      </div>
    </div>
  );
};

export default MyPosts;
