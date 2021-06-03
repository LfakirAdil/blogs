//npx json-server --watch data/db.json --port 8000
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, isLoading } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {isLoading && <div>Loading ...</div>}
            {blogs && <BlogList blogs={blogs} />}
        </div>
    );
}

export default Home;