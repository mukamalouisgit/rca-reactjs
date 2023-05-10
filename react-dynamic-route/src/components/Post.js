import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const Post = () => {
    const { id } = useParams();
    const [post, SetPost] = useState({});
    const navigate = useNavigate();
    const [loading, setLoading] = useState('');


    const handleClick = () => {
        navigate('/');
    };

    useEffect(() => {
        const fetch = async () => {
            setLoading('Loading ...');
            try {
                const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
                SetPost(data);
            } catch (err) {
                console.error(err);
            }
            setLoading('');
        };
        fetch();
    }, [id]);
    return (
        <div className="contents px-4 text-center">
            {loading}
            <article>
                <h6>{post.title}</h6>
                <p>{post.body}</p>
                <br />
                <button className="btn btn-outline-success" onClick={handleClick}>Go back</button>
            </article>
        </div>
    );
};

export default Post;