// pages/api/games.ts

import { NextApiRequest, NextApiResponse } from 'next';

// Função para buscar dados (simulada aqui)
async function fetchData() {
  // Lógica para buscar dados (por exemplo, usando fetch ou acessando um banco de dados)
  // Retorno simulado para fins de exemplo
  return [
    { id: 1, name: 'Game A' },
    { id: 2, name: 'Game B' },
    { id: 3, name: 'Game C' },
  ];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await fetchData();
    res.status(200).json(data);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
}
