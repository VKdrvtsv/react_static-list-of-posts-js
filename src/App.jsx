import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function getCommentByPostId(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId)
    || null;
}

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId)
    || null;
}

export const posts = postsFromServer.map(post => ({
  ...post,
  comments: getCommentByPostId(post.id),
  user: getUserById(post.userId),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <div className="PostList">
      <PostList posts={posts} />
    </div>
  </section>
);
