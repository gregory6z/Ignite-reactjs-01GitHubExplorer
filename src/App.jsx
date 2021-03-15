import './styles/global.scss'

import React from 'react'
import { RepositoryList } from './components/RepositoryList'
export function App() {
  
 return (
   //chaque fois qu'il y a un composant sous l'autre, vous avez besoin d'un composant autour.Fragment soit une div
   <RepositoryList />
 )
}