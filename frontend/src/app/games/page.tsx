// // pages/games/index.tsx
import React from 'react'
// import axios from 'axios'

// // Define o tipo das props do componente Games
// interface GamesProps {
//   games: Game[]
// }

// // Define o tipo do objeto Game
// interface Game {
//   id: number
//   stars: number
//   team1?: Team1
//   team2?: Team2
//   format: string
//   event?: Event
//   live: boolean
//   date?: number
//   title?: string
// }

// export interface Team1 {
//   name: string
//   id: number
// }

// export interface Team2 {
//   name: string
//   id?: number
// }

// export interface Event {
//   id: number
//   name: string
// }

// export default async function Games() {
//   try {
//     // Faz um GET na API de usuários do GitHub
//     // Especifica o tipo da resposta como GitHubUser
//     const response = await axios.get<GamesProps>(`http://localhost:5000/games`);
//     console.log("radouken");
//     // Destrutura os dados da resposta
//     const { data } = response;
//     // Mostra os dados no console
//     console.log(data);
//     // Retorna os dados
//     return data;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       // Mostra a mensagem de erro
//       console.error(error.message);
//       // Retorna a mensagem de erro
//       return error.message;
//     } else {
//       // Mostra o erro inesperado
//       console.error(error);
//       // Retorna uma mensagem genérica
//       return 'Ocorreu um erro inesperado';
//     }
//   }
// }

// Games()


import axios from 'axios';

// Define o tipo do usuário do GitHub
interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  bio: string;
}

export default async function Games(username: string) {
  try {
    // Faz um GET na API de usuários do GitHub
    // Especifica o tipo da resposta como GitHubUser
    const response = (await axios.get<GitHubUser>(`http://localhost:5000/games`));
    // Destrutura os dados da resposta
    const { data } = response;
    // Mostra os dados no console
    console.log(data.avatar_url);
    // Retorna os dados
    return (data);
  } catch (error) {
    // Verifica se o erro é do axios
    if (axios.isAxiosError(error)) {
      // Mostra a mensagem de erro
      console.error(error.message);
      // Retorna a mensagem de erro
      return `${error.message} seu corno`;
    } else {
      // Mostra o erro inesperado
      console.error(error);
      // Retorna uma mensagem genérica
      return 'Ocorreu um erro inesperado';
    }
  }
}

// Chama a função com um nome de usuário
Games('ronaldocestrela');
