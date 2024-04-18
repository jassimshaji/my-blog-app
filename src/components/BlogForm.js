import React, { useState } from "react";
import "./BlogForm.css";

function BlogForm() {
    const [blogName, setBlogName] = useState("");
    const [description, setDescription] = useState("");
    const [authorName, setAuthorName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Blog Name:", blogName);
        console.log("Description:", description);
        console.log("Author Name:", authorName);
        // You can add code here to handle form submission
        // such as sending data to an API
        setBlogName("");
        setDescription("");
        setAuthorName("");
    };

    return (
        <div className="blog-form">
            <h2>Add Blog</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Blog Name:</label>
                    <input
                        type="text"
                        value={blogName}
                        onChange={(e) => setBlogName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Author Name:</label>
                    <input
                        type="text"
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default BlogForm;