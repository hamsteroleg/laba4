import { useEffect, useState } from "react";

function Reviews() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then(res => res.json())
      .then(data => setComments(data));
  }, []);

  return (
    <section>
      <h2>Відгуки</h2>

      {comments.map(c => (
        <div key={c.id}>
          <h4>{c.name}</h4>
          <p>{c.body}</p>
        </div>
      ))}
    </section>
  );
}

export default Reviews;