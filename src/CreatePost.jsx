import { useState } from 'react';

const CreatePost = ({setPostValue}) => {
    const [postText, setPostText] = useState('');
    const handleChange = (e) => (
        setPostText(e.target.value)
    )

    const handleClick = () => {
        setPostValue(postText);
        setPostText('')
    }

return (
    <div style={{display: 'flex'}}>
         <textarea onChange={(e) => handleChange(e)} value={postText}/>
         <button onClick={handleClick}>Publish</button>
    </div>
   

)};

export default CreatePost;