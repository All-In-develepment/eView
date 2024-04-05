export type MatchProps = Match;

export interface Match {
  id: number;
  significance: string;
  team1: Team1;
  team2: Team2;
  date: Date;
  format: Format;
  event: Event;
  maps: Map[];
  players: Players;
  streams: Stream[];
  status: string;
  hasScorebot: boolean;
  highlightedPlayers: HighlightedPlayers;
  headToHead: HeadToHead[];
  vetoes: Vet[];
  highlights: any[];
  demos: any[];
  odds: Odd[];
}

export interface Team1 {
  name: string;
  id: number;
  rank: number;
}

export interface Team2 {
  name: string;
  id: number;
  rank: number;
}

export interface Format {
  type: string;
  location: string;
}

export interface Event {
  name: string;
  id: number;
}

export interface Map {
  name: string;
  result?: Result;
  statsId?: number;
}

export interface Result {
  team1TotalRounds: number;
  team2TotalRounds: number;
  halfResults: HalfResult[];
}

export interface HalfResult {
  team1Rounds: number;
  team2Rounds: number;
}

export interface Players {
  team1: Team12[];
  team2: Team22[];
}

export interface Team12 {
  name: string;
  id: number;
}

export interface Team22 {
  name: string;
  id: number;
}

export interface Stream {
  name: string;
  link: string;
  viewers: number;
}

export interface HighlightedPlayers {
  team1: Team13;
  team2: Team23;
}

export interface Team13 {
  name: string;
  id: number;
}

export interface Team23 {
  name: string;
  id: number;
}

export interface HeadToHead {
  date: number;
  map: string;
  winner: Winner;
  event: Event2;
  result: string;
}

export interface Winner {
  name: string;
  id: number;
}

export interface Event2 {
  name: string;
  id: number;
}

export interface Vet {
  team?: Team;
  map: string;
  type: string;
}

export interface Team {
  name: string;
  id: number;
  rank: number;
}

export interface Odd {
  provider: string;
  team1: number;
  team2: number;
}
