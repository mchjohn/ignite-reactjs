export type RepositoryProps = {
  name: string;
  description: string;
  html_url: string;
}

type Props = {
  repository: RepositoryProps;
}

export function RepositoryItem({ repository }: Props) {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>

      <a href={repository.html_url}>
        Acessar repositório
      </a>
    </li>
  )
}