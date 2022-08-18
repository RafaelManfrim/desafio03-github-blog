import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaCalendarDay, FaComment, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useParams } from "react-router-dom";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { Action, PostContainer, PostHeaderActions, PostHeaderContainer, PostInfoContainer } from "./styles";

interface PostData {
  html_url: string;
  title: string;
  user: {
    login: string;
  }
  created_at: string;
  comments: number;
  body: string;
}

export function Post() {
  const [post, setPost] = useState<PostData>({} as PostData);
  const [loading, setLoading] = useState(true);

  const { number: postNumber } = useParams();

  async function fetchPostData() {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.github.com/repos/rafaelmanfrim/desafio03-github-blog/issues/${postNumber}`)
      setPost(response.data)
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPostData()
  }, [postNumber]);

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <PostContainer>
      <PostHeaderContainer>
        <PostHeaderActions>
          <Action to='/'>
            <FaArrowLeft /> VOLTAR
          </Action>
          <Action to={post.html_url} target="_blank">
            VER NO GITHUB <FaExternalLinkAlt />
          </Action>
        </PostHeaderActions>
        <strong>{post.title}</strong>
        <PostInfoContainer>
          <span>
            <FaGithub /> {post.user.login}
          </span>
          <span>
            <FaCalendarDay /> {formatDistanceToNow(new Date(post.created_at), {
              locale: ptBR,
              addSuffix: true,
            })}
          </span>
          {post.comments > 0 && (
            <span>
              <FaComment /> {post.comments} {post.comments === 1 ? "seguidor" : "seguidores"}
            </span>
          )}
        </PostInfoContainer>
      </PostHeaderContainer>
      <ReactMarkdown
        children={post.body}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={dracula as any}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </PostContainer>
  );
}