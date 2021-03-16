import { useEffect, useState } from 'react';
import '../styles/repositories.scss';
import { RepositoryItem } from "./RepositoryItem";

interface Repository {
  name:string;
  description:string;
  html_url:string;
}
//https://api.github.com/orgs/rocketseat/repos

export function RepositoryList(){
const [repositories , setRepositories] = useState<Repository[]>([]);

useEffect(()=> {
  fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
},[])

  const repository = {
    name:'unform',
    description:'Forms in React',
    link:'https://github.com/unform/unform'
  }
  return (
    <section className="repository-list">
      <h1>Liste des référentiels</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}
        
      </ul>
    </section>
  )
}