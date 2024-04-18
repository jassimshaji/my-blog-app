import "./BlogForm.css";
import React, { useState } from "react";

function BlogForm() {
    const [blogName, setBlogName] = useState("");
    const [description, setDescription] = useState("");
    const [authorName, setAuthorName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form submission logic here (e.g., POST to an API endpoint)
        console.log("Form submitted with values:", {
            blogName,
            description,
            authorName,
        });

        // Reset the form fields
        setBlogName("");
        setDescription("");
        setAuthorName("");
    };

    return (
        <div>
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
                    ></textarea>
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
