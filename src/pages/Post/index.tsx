import { useParams } from "react-router-dom";

export function Post() {
  const { number: postNumber } = useParams();

  return (
    <div>
      <h1>Post {postNumber}</h1>
    </div>
  );
}