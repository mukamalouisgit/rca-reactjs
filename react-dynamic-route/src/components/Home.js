import './style.css'
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState('');

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading('Loading ...');
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(data);
      } catch (err) {
        console.error(err);
      }
      setLoading('');

    };
    fetch();
  }, []);
  return (
    <div className="contents px-4 text-center">
      {loading}
      {posts.map((el) => (
        <article key={el.id}>
          <Link to={`/post/${el.id}`}>
            <h6>{el.title}</h6>
          </Link>
          <p>{el.body}</p>
        </article>
      ))}
    </div>
  );
};

export default Home;