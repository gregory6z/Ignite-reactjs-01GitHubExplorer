import { useState ,useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'

//https://api.github.com/orgs/rocketseat/repos

export function RepositoryList(){
const [repositories , setRepositories] = useState([]);

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
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}