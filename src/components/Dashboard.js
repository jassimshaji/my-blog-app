import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

function Dashboard() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts"
                );
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="dashboard">
            <h2>Blog Dashboard</h2>
            <div className="posts">
                {posts.slice(0, 10).map((post) => (
                    <div key={post.id} className="post-card">
                        <h3>ID: {post.id}</h3>
                        <h4>Title: {post.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;