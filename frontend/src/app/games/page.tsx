"use client";
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { GamesProps } from '../models/Games'
import { fromUnixTime, set } from 'date-fns';


export default function GetGames() {
  
  const [ listGames, setListGames ] = useState<GamesProps[]>([]);
  
  const getGames = async () => {
    const response = (await axios.get<GamesProps>('http://localhost:5000/games')).data;
    console.log(response)
    response.map((game) => {
      game.date = fromUnixTime(game.date / 1000);
      // setListGames([...listGames, [game]]);
    });
  }
  
  useEffect(() => {
    getGames();
  }, []);

  console.log(typeof listGames)

  try {
    
    // console.log(response.data)
    return (
      <>
        <h1>Games</h1>
        <div className='grid grid-cols-3 gap-3'>
          <div>Primeira coluna</div>
          <div className='grid grid-cols-subgrid gap-3 col-span-2'>
            
          </div>
          <div>Terceira coluna</div>
        </div>
      </>
    );
  } catch (error) {
    console.error(error);
  }
} 
