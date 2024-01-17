import Post from './Post.jsx';
import CreatePost from './CreatePost.jsx';
import data from './data.json';
import { useState } from 'react';
import './App.css';

function App() {
  const [post, setPost] = useState(data);
  
  function addPost(e){
    setPost([...post, {'id': post.length + 1, 'name': 'Me', 'text': e}])
  }

  function removePost(e){
    setPost(post.filter(x => x.id !== e))
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <CreatePost setPostValue={addPost}/>
        <div className="post-container">
        {post.map((x) => (
          <Post key={x.id} name={x.name} text={x.text} remove={removePost} postId={x.id}/>
        ))}
        </div>
      </header>
    </div>
  );
}

export default App;
