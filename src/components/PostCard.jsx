
export default function PostCard({ post }) {
  return (
    <article className="post-card">
      <img src={post.image} alt={post.caption} />
      <h2>{post.caption}</h2>
    </article>
  );
}