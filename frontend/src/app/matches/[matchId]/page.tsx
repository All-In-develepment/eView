"use client";
import { MatchProps } from "@/app/models/Match";
import axios from "axios";
import { fromUnixTime, format } from "date-fns";
import React, { useEffect, useState } from "react";

import { Card, Typography } from "@material-tailwind/react";
import { TeamProps } from "@/app/models/Team";
import Image from "next/image";
import Link from "next/link";

function MatchDetails({ params }: { params: { matchId: string } }) {
  const url = process.env.NEXT_PUBLIC_BACKEND;
  const [matchDetails, setMatchDetails] = useState<MatchProps | null>(null);

  const [team1Stats, setTeam1Stats] = useState<TeamProps | null>(null);
  const [team2Stats, setTeam2Stats] = useState<TeamProps | null>(null);

  const fetchData = async () => {
    try {
      const { data } = await axios.get<MatchProps>(
        `${url}/get-matches-statistics/${params.matchId}`
      );

      const { data: team1 } = await axios.get(
        `${url}/get-team-statistics/${data.team1.id}`
      );

      const { data: team2 } = await axios.get(
        `${url}/get-team-statistics/${data.team2.id}`
      );

      const newData: MatchProps = {
        ...data,
        date: fromUnixTime(Number(data.date) / 1000),
      };

      setMatchDetails(newData);
      setTeam1Stats(team1);
      setTeam2Stats(team2);
    } catch (error) {
      console.error("Error fetching match details:", error);
    }
  };

  if (matchDetails) {
    const eventName = matchDetails.event.name
      .toLowerCase()
      .replaceAll(" ", "-");

    const newTeam1 = matchDetails.team1.name.toLowerCase().replaceAll(" ", "-");

    const newTeam2 = matchDetails.team2.name.toLowerCase().replaceAll(" ", "-");

    const newUrl = `${newTeam1}-${newTeam2}-${eventName}`;

    console.log(newUrl);
  }

  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, []);
  return (
    <>
      {matchDetails && (
        <div className="flex flex-col items-center">
          {/* Primeira coluna */}
          <div className="col-span-1"></div>

          {/* Segunda coluna */}
          <div className="grid grid-cols-3 gap-3 max-w-screen-lg">
            {/* Primeira subcoluna */}
            <div className="bg-gray-200 p-3 flex flex-col justify-center items-center col-span-1">
              {team1Stats && (
                <>
                  <Link href={`/team/${matchDetails.team1.id}`}>
                    <Image
                      src={team1Stats.logo}
                      alt={`Logo ${team1Stats.name}`}
                      width={80}
                      height={40}
                      layout="fixed"
                    />
                    <Typography>{matchDetails.team1?.name}</Typography>
                  </Link>
                </>
              )}
            </div>

            {/* Segunda subcoluna */}
            <div className="bg-gray-200 p-3 flex flex-col justify-center items-center col-span-1">
              <div className="bg-gray-200 p-3 flex flex-col justify-center items-center col-span-1">
                <Typography variant="h4">
                  {format(matchDetails?.date, "HH:mm")}
                </Typography>
                <Typography>
                  {format(matchDetails?.date, "dd/MM/yy")}
                </Typography>
                <Typography>{matchDetails.event?.name}</Typography>
              </div>
            </div>

            {/* Terceira subcoluna */}
            <div className="bg-gray-200 p-3 flex flex-col justify-center items-center col-span-1">
              {team2Stats && (
                <>
                  <Link href={`/team/${matchDetails.team2.id}`}>
                    <Image
                      src={team2Stats.logo}
                      alt={`Logo ${team2Stats.name}`}
                      width={80}
                      height={40}
                      layout="fixed"
                    />
                    <Typography>{matchDetails.team2?.name}</Typography>
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Grid para mapas e streams */}
          <div className="grid grid-cols-2 gap-3 max-w-screen-lg mt-4">
            {/* Primeira coluna do grid de mapas e streams */}
            <div className="bg-gray-200 p-4 col-span-1">
              <Typography variant="h6">Mapas</Typography>
              <div>
                <Typography>
                  {matchDetails?.format.type === "bo3" &&
                    `Melhor de 3 ${matchDetails?.format.location}`}
                </Typography>
                <Typography>{`*${matchDetails?.significance}`}</Typography>
              </div>
              {matchDetails?.maps.map((map, index) => (
                <Typography key={index}>{map.name}</Typography>
              ))}
            </div>

            {/* Segunda coluna do grid de mapas e streams */}
            <div className="bg-gray-200 p-4 col-span-1">
              <Typography variant="h6">Streams</Typography>
              {matchDetails?.streams.map((stream) => (
                <Card
                  key={stream.viewers}
                  className="bg-gray-300 mb-4 transition duration-300 ease-in-out hover:text-blue-500 hover:opacity-100"
                >
                  <a
                    key={stream.viewers}
                    href={stream.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Typography
                      className="flex items-center justify-center"
                      key={stream.viewers}
                    >
                      {stream.name}
                    </Typography>
                  </a>
                </Card>
              ))}
            </div>
            <div className="bg-gray-200 p-4 col-span-1">
              {matchDetails.vetoes.map((veto, index) => (
                <Card key={index} className="bg-gray-300 mb-2 ">
                  <Typography>{`${index + 1}. ${
                    !veto.team?.name
                      ? "Ninguem escolheu"
                      : veto.type === "removed"
                      ? `${veto.team?.name} removeu`
                      : `${veto.team?.name} escolheu`
                  } ${veto.map.split("_")[1].charAt(0).toUpperCase()}${veto.map
                    .split("_")[1]
                    .slice(1)}`}</Typography>
                </Card>
              ))}
            </div>
          </div>

          {/* Terceira coluna */}
          <div className="col-span-1"></div>
        </div>
      )}
    </>
  );
}

export default MatchDetails;
