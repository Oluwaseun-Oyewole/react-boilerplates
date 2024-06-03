import { useEffect, useState } from "react";
import Loader from "../../components/custom/loader";
import { postValidationSchema } from "../../schema/posts";
import { allPosts } from "../../services/posts";
import { PostResponseBody } from "../../services/posts/types";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const posts = await allPosts();
      if (posts) {
        setPosts(posts);
      }
      setLoading(false);
    } catch (error) {
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
      {loading ? (
        <Loader />
      ) : (
        <div>
          {posts?.map((post: PostResponseBody, index) => {
            const validPost = postValidationSchema.safeParse(post);
            if (!validPost.success) {
              return <div>No post found!!</div>;
            }
            return (
              <div key={index} className="flex gap-2">
                <p>{post.id}</p>
                {post?.title}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
