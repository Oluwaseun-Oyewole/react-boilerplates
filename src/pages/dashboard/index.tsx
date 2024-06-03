import { useEffect, useState } from "react";
import Loader from "../../components/custom/loader";
import { postValidationSchema } from "../../schema/posts";
import { allPosts } from "../../services/posts";
import { PostResponseBody } from "../../services/posts/types";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const posts = await allPosts();
      if (posts) {
        setPosts(posts);
      }
      setLoading(false);
    } catch (error) {
      setError("Error while fetching....");
      setLoading(false);
      return;
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      <h1>Dashboard</h1>
      {error && (
        <div role="alert" aria-atomic="true">
          <p> {error}</p>
        </div>
      )}
      {loading ? (
        <Loader />
      ) : (
        <ul>
          {posts?.map((post: PostResponseBody, index) => {
            const validPost = postValidationSchema.safeParse(post);
            if (!validPost.success) return <li>No post found!!</li>;
            return <li key={index}>{post?.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
