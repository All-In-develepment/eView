export type TeamProps = Team;

export interface Team {
  id: number;
  name: string;
  logo: string;
  twitter: string;
  instagram: string;
  country: Country;
  rank: number;
  players: Player[];
  rankingDevelopment: number[];
  news: News[];
}

export interface Country {
  name: string;
  code: string;
}

export interface Player {
  name: string;
  id: number;
  timeOnTeam: string;
  mapsPlayed: number;
  type: string;
}

export interface News {
  name: string;
  link: string;
}
