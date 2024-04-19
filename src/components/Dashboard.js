import React, { useState, useEffect } from "react";
import "./Dashboard.css";

function Dashboard() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Fetch the initial list of blogs from the API
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                // Set only a limited number of blogs for simplicity
                setBlogs(data.slice(0, 10));
            })
            .catch(error => console.error("Error fetching blogs:", error));
    }, []);

    return (
        <div className="dashboard">
            <h1 className="blog-dashboard-heading">Blog Dashboard</h1>
            <div className="blog-list">
                {blogs.map((blog) => (
                    <div key={blog.id} className="blog-card">
                        <h3>{blog.title}</h3>
                        <p>{blog.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;

