import style from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  const postsElements = props.state.posts.map(post => <Post message={post.message} />)
  return (
    <div className={style.myPostsWrapper}>
      <h3 className={style.heading}>
        my posts
      </h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div className={style.item}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
