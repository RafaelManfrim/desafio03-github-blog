import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import axios from "axios";

import { UserCard } from "../../components/UserCard";

import { TitleContainer, FetchPostsInput, PostCard, PostsContainer } from "./styles";

interface Post {
  id: number;
  title: string;
  created_at: string;
  body: string;
}

interface User {
  name: string;
  bio: string;
  followers: number;
  company: string;
  login: string;
  avatar_url: string;
  html_url: string;
}

export function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [search, setSearch] = useState('')

  async function fetchPosts() {
    try {
      const response = await axios.get(`https://api.github.com/search/issues?q=${search}%20repo:rafaelmanfrim/desafio03-github-blog`)
      setPosts(response.data.items);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }

  async function fetchUser() {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.github.com/users/rafaelmanfrim`);
      const { name, bio, avatar_url, login, company, followers, html_url } = response.data;
      setUser({ name, bio, avatar_url, login, company, followers, html_url });
    } catch (error) {
      console.log(error);
    }
    fetchPosts();
  }

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <UserCard {...user!} />
      <div>
        <TitleContainer>
          <h3>Publicações</h3>
          <span>{posts.length} Publicações</span>
        </TitleContainer>
        <FetchPostsInput
          type="text"
          placeholder="Buscar conteúdo"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              fetchPosts();
            }
          }}
        />
        <PostsContainer>
          {posts.map((post: Post) => (
            <PostCard key={post.id}>
              <div>
                <strong>{post.title}</strong>
                <time>
                  {formatDistanceToNow(new Date(post.created_at), {
                    locale: ptBR,
                    addSuffix: true,
                  })}
                </time>
              </div>
              <p>{post.body}</p>
            </PostCard>
          ))}
        </PostsContainer>
      </div>
    </>
  );
}