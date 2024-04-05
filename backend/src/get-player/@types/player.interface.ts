export interface Player {
  id: number;
  name: string;
  ign: string;
  image: string;
  age: number;
  twitter: string;
  instagram: string;
  country: Country;
  team: Team;
  statistics: Statistics;
  achievements: Achievement[];
  teams: Team2[];
  news: News[];
}

export interface Country {
  name: string;
  code: string;
}

export interface Team {
  name: string;
  id: number;
}

export interface Statistics {
  rating: number;
  killsPerRound: number;
  headshots: number;
  mapsPlayed: number;
  deathsPerRound: number;
  roundsContributed: number;
}

export interface Achievement {
  place: string;
  event: Event;
}

export interface Event {
  name: string;
  id: number;
}

export interface Team2 {
  id: number;
  name: string;
  startDate: number;
  trophies: Trophy[];
  leaveDate?: number;
}

export interface Trophy {
  id: number;
  name: string;
}

export interface News {
  name: string;
  link: string;
}
