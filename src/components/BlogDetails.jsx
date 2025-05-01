import { useParams } from "react-router-dom";
import { useState } from "react";
import { dummyBlogs } from "../data/DummyBlogs";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = dummyBlogs.find((b) => b.id === parseInt(id));
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-serif text-red-500">Blog not found</h2>
      </div>
    );
  }

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const commentObj = {
        text: newComment,
        author: "Anonymous",
        date: new Date().toLocaleDateString(),
      };
      setComments((prev) => [...prev, commentObj]);
      setNewComment("");
    }
  };

  return (
    <article className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-8 text-white">
            <span className="mb-4 inline-block uppercase text-sm tracking-wide">
              {blog.category}
            </span>
            <h1 className="text-4xl font-serif font-bold mb-2">{blog.title}</h1>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <img
                  src={blog.authorAvatar}
                  alt={blog.author}
                  className="w-8 h-8 rounded-full"
                />
                <span>{blog.author}</span>
              </div>
              <span>•</span>
              <span>{blog.date}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">{blog.content}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLikes(likes + 1)}
              className="flex items-center space-x-1 text-blue-600 hover:underline"
            >
              <span>👍</span>
              <span>{likes}</span>
            </button>
            <div className="flex items-center space-x-1 text-gray-600">
              <span>💬</span>
              <span>{comments.length}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-2xl font-serif font-bold mb-6">Comments</h3>

          <div className="mb-6">
            <textarea
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
              rows="3"
            />
            <button
              onClick={handleAddComment}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Post Comment
            </button>
          </div>

          <div className="space-y-6">
            {comments.map((comment, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded p-4 border border-gray-200"
              >
                <div className="flex items-center space-x-2 mb-2 text-sm text-gray-600">
                  <span className="font-semibold">{comment.author}</span>
                  <span>{comment.date}</span>
                </div>
                <p className="text-gray-800">{comment.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogDetails;
