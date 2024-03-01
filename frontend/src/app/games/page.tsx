"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { GamesProps } from "../models/Games";
import { fromUnixTime, set } from "date-fns";

export default function GetGames() {
  const [listGames, setListGames] = useState<GamesProps>([]);

  const getGames = async () => {
    const { data } = await axios.get<GamesProps>("http://localhost:5000/games");

    const newData = data.map((game) => {
      return {
        ...game,
        date: fromUnixTime(game.date / 1000),
      };
    });
    setListGames(newData);
  };

  useEffect(() => {
    getGames();
  }, []);

  try {
    // console.log(response.data)
    return (
      <>
        <h1>Games</h1>
        <div className="grid grid-cols-3 gap-3">
          <div>Primeira coluna</div>
          {listGames.map((game) => (
            <p key={game.id}>{game.id}</p>
          ))}
          <div className="grid grid-cols-subgrid gap-3 col-span-2"></div>
          <div>Terceira coluna</div>
        </div>
      </>
    );
  } catch (error) {
    console.error(error);
  }
}
