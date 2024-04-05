"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { MatchesProps } from "../models/Matches";
import { fromUnixTime, format } from "date-fns";
import dotenv from "dotenv";
import Link from "next/link";

import { Card, Typography } from "@material-tailwind/react";

dotenv.config();

export default function GetGames() {
  const url = process.env.NEXT_PUBLIC_BACKEND;
  const [listGames, setListGames] = useState<MatchesProps>([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get<MatchesProps>(
        `${url}/get-matches-statistics`
      );

      const newData = data.map((game) => {
        const date = fromUnixTime(game.date / 1000);
        return {
          ...game,
          date: game.date ? format(date, "dd/MM HH:mm") : null,
        };
      });

      setListGames(newData);
    } catch (error) {
      console.error("Error fetching match details:", error);
    }
  };

  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <th
                key={1}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Primeira Coluna
                </Typography>
              </th>
              <th
                key={2} // Use chaves diferentes para cada chave
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Nome dos Jogos
                </Typography>
              </th>
              <th
                key={3} // Use chaves diferentes para cada chave
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Terceira Coluna
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            {listGames
              .sort((a, b) => a.date ?? a.date - b.date)
              .map((game, index) => {
                return (
                  <tr key={index}>
                    <td key={game.id}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {/* Conteúdo da primeira coluna */}
                      </Typography>
                    </td>
                    {/* Início da segunda coluna */}
                    <td key={game.id + 1}>
                      {game.team1?.name && (
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70 mt-8 transition duration-300 ease-in-out hover:text-blue-500 hover:opacity-100"
                        >
                          <Link href={`/matches/${game.id}`}>
                            {game.team1?.name}
                            <b> vs </b>
                            {game.team2?.name}
                          </Link>
                          {game.live ? (
                            <b> LIVE </b>
                          ) : (
                            <b> {game.date.toString()}</b>
                          )}
                        </Typography>
                      )}
                    </td>
                    {/* Fim da segunda coluna */}
                    <td key={game.id + 2}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {/* Conteúdo da terceira coluna */}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </Card>
    </>
  );
}
