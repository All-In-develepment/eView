export type MatchesProps = Match[];

interface Match {
  id: number;
  date: any;
  stars: number;
  team1?: Team1;
  team2?: Team2;
  format: string;
  event?: Event;
  live: boolean;
  title?: string;
}

interface Team1 {
  name: string;
  id: number;
}

interface Team2 {
  name: string;
  id: number;
}

interface Event {
  id: number;
  name: string;
}
