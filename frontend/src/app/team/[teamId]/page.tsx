"use client";
import axios from "axios";
import { fromUnixTime, format } from "date-fns";
import { useState, useEffect } from "react";

import { Card, Typography } from "@material-tailwind/react";
import CountryFlag from "react-country-flag";
import FeatherIcon from "feather-icons-react";

import Image from "next/image";
import { PlayerProps } from "@/app/models/Player";
import { TeamProps } from "@/app/models/Team";

export default function GetTeam({ params }: { params: { teamId: string } }) {
  const url = process.env.NEXT_PUBLIC_BACKEND;
  const [teamStats, setTeamStats] = useState<TeamProps | null>(null);
  const [playersStats, setPlayersStats] = useState<PlayerProps[]>([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get<TeamProps>(
        `${url}/get-team-statistics/${params.teamId}`
      );

      const playerStats = await Promise.all(
        data.players.map(async (player) => {
          const { data } = await axios.get<PlayerProps>(
            `${url}/get-player/${player.id}`
          );

          return data;
        })
      );

      setTeamStats(data);
      setPlayersStats(playerStats);
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
      {teamStats && (
        <div className="flex flex-col items-center">
          {/* Primeira coluna */}
          <div className="col-span-1"></div>

          {/* Segunda coluna */}
          {/* Primeira subcoluna */}
          <div className="bg-gray-200 p-3 flex flex-row justify-center items-center col-span-1">
            {playersStats &&
              playersStats.slice(0, 5).map((player) => (
                <Card key={player.id}>
                  <Image
                    src={
                      player.image ??
                      "https://www.hltv.org/img/static/player/player_silhouette.png"
                    }
                    alt={player.name}
                    width={80}
                    height={40}
                    layout="fixed"
                  />
                  <Typography>{player.ign}</Typography>
                </Card>
              ))}
          </div>
          <Card>
            <div className="grid grid-cols-2 gap-2 max-w-screen-lg">
              <div>
                {teamStats && (
                  <div className="flex flex-row items-center space-x-2">
                    <Image
                      src={`${teamStats.logo}`}
                      alt={`Logo ${teamStats.name}`}
                      width={80}
                      height={40}
                      priority
                      layout="fixed"
                    />
                    <div className="flex flex-col">
                      <div className="flex items-center space-x-2">
                        <CountryFlag
                          countryCode={teamStats.country?.code}
                          svg
                        />
                        <Typography>{teamStats.country?.name}</Typography>
                      </div>
                      <Typography variant="h5">{teamStats.name}</Typography>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex justify-end items-center mb-10">
                {teamStats && (
                  <a
                    href={teamStats.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FeatherIcon size={24} icon="twitter" />
                  </a>
                )}
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="flex justify-between">
                <Typography>Ranking mundial</Typography>

                <Typography>#{teamStats.rank}</Typography>
              </div>
              <div className="flex justify-between">
                <Typography>Semanas no top30</Typography>
                <Typography>
                  {teamStats.rankingDevelopment.reduce((acc, num) => {
                    if (num <= 30) {
                      acc++;
                    }
                    return acc;
                  }, 0)}
                </Typography>
              </div>
              <div className="flex justify-between">
                <Typography>Idade média dos jogadores</Typography>
                <Typography>
                  {teamStats.players
                    .filter((coach) => coach.type !== "Coach")
                    .map((player) => {
                      const playerDetail = playersStats.find(
                        (playerDetail) => playerDetail.id === player.id
                      );
                      return playerDetail ? playerDetail.age : 0;
                    })
                    .reduce((acc, age) => acc + age, 0) /
                    teamStats.players.filter((coach) => coach.type !== "Coach")
                      .length}
                </Typography>
              </div>
              <div className="flex justify-between">
                <Typography>Coach</Typography>
                <Typography>
                  {teamStats.players
                    .filter((player) => player.type === "Coach")
                    .map((coach, index) => {
                      const coachDetails = playersStats.find(
                        (player) => player.id === coach.id
                      );
                      if (coachDetails) {
                        return (
                          <div className="flex flex-row" key={index}>
                            <div className="flex items-center space-x-2">
                              <CountryFlag
                                countryCode={coachDetails.country?.code}
                                svg
                              />
                            </div>
                            <Typography>
                              {`${coachDetails?.name.split(" ")[0]} "${
                                coachDetails?.ign
                              }" ${coachDetails?.name.split(" ")[1]}`}
                            </Typography>
                          </div>
                        );
                      } else {
                        return (
                          <div key={coach.id}>
                            <p>Detalhes do treinador não disponíveis.</p>
                          </div>
                        );
                      }
                    })}
                </Typography>
              </div>
            </div>
          </Card>

          {/* Terceira coluna */}
          <div className="col-span-1"></div>
        </div>
      )}
    </>
  );
}
// .map((player, index) => {
//   const playerDetails = playersStats.find(playerId => playerId.id === player.id)).reduce(
//     (acc, player) => acc + player.age, 0)
//     return(
//       coachDetails
//     )
//     })
