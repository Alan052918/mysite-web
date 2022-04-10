import Main from "./Main";
import PinnedPosts from "../components/posts/PinnedPosts";
import Footer from "../components/Footer";

const Posts = () => (
  <Main title="posts" description="posts">
    <div className="posts">
      <PinnedPosts />
      <Footer />
    </div>
  </Main>
);

export default Posts;
