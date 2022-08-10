import { UserCard } from "../../components/UserCard";

export function Blog() {
  return (
    <>
      <UserCard />
      <div>
        <div>
          <h3>Publicações</h3>
          <span>6 Publicações</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
        <div>
          <div>
            <div>
              <strong>Título da Publicação</strong>
              <time>Há 1 dia</time>
            </div>
            <p>
              Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in
              JavaScript, and to explain their differences from other languages.
            </p>
          </div>
          <div>
            <div>
              <strong>Título da Publicação</strong>
              <time>Há 1 dia</time>
            </div>
            <p>
              Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in
              JavaScript, and to explain their differences from other languages.
            </p>
          </div>
          <div>
            <div>
              <strong>Título da Publicação</strong>
              <time>Há 1 dia</time>
            </div>
            <p>
              Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in
              JavaScript, and to explain their differences from other languages.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}