import { useState } from 'react'
import { useHistory } from "react-router-dom";



function Create() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory(); // to redirect
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        const blog = { title, body, author }
        // sending to JSON SERVER
        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog has been added')
            setIsLoading(false)
            //history.go(-1) to go back one step in history
            history.push('/');
        })
    }
    return (
        <div className="create">
            <form onSubmit={handleSubmit}>
                <label>Title : </label>
                <input
                    type="text"
                    placeholder='Title of the article'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                >

                </input>
                <label>Body of the article :</label>
                <textarea
                    placeholder="The body of the article"
                    type=""
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                >
                </textarea>
                <select onChange={(e) => setAuthor(e.target.value)}>
                    <option>Author 1</option>
                    <option>Author 2</option>
                    <option>Author 3</option>
                </select>
                {!isLoading && <button>Publish !</button>}
                {isLoading && <button disabled>Publishing article ...</button>}
                <div>
                    {title} <br />
                    {body} <br />
                Writen by : {author} <br />
                </div ></form>

        </div>
    )
}
export default Create