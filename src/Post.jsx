const Post = ({name, text, remove, postId}) => {
    return (
        <div className="post-card">
            <div>
            <header className="header">{text}</header>
            <p className="name">{name}</p>
            </div>
            <button className="x" onClick={() => remove(postId)}>X</button>
        </div>
    )
};


export default Post;