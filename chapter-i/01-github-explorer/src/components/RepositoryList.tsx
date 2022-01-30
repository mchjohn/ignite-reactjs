import { RepositoryItem, RepositoryProps } from "./RepositoryItem";

import '../styles/repositories.scss';
import { useEffect, useState } from "react";


export function RepositoryList() {
  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/mchjohn/repos')
      .then(res => res.json()).then(data => setRepositories(data));
  }, [repositories]);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {
          repositories.map(repository => <RepositoryItem key={repository.name} repository={repository} />)
        }
      </ul>
    </section>
  )
}