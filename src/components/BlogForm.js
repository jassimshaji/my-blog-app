import React, { useState } from 'react';
import './BlogForm.css'
const BlogForm = () => {
    const [blogName, setBlogName] = useState('');
    const [description, setDescription] = useState('');
    const [authorName, setAuthorName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Blog Details:');
        console.log(`Blog Name: ${blogName}`);
        console.log(`Description: ${description}`);
        console.log(`Author Name: ${authorName}`);

        // Reset form fields
        setBlogName('');
        setDescription('');
        setAuthorName('');
    };

    return (
        <div className="container mt-4">
            <h2 className="blog-dashboard-heading">Add New Blog</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Blog Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={blogName}
                        onChange={(e) => setBlogName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>Author Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Blog</button>
            </form>
        </div>
    );
};

export default BlogForm;
