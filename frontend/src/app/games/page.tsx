import React from 'react'
import axios from 'axios'
import { GamesProps } from '../models/Games'

export default async function getGames() {
  try {
    const response: GamesProps = (await axios.get('http://eview-backend-1:5000/games')).data;
    // console.log(response.data)
    return (
      <>
        <h1>Teste</h1>
        {console.log(response.map((game) => game.title))}
        {response.map((game) => (
          <div key={game.id}>
            <h2>{game.title}</h2>
          </div>
        ))}
      </>
    );
  } catch (error) {
    console.error(error);
  }
} 

getGames();
