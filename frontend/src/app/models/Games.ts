export type GamesProps = Game[]

export interface Game {
  id: number
  date: any
  stars: number
  team1?: Team1
  team2?: Team2
  format: string
  event?: Event
  live: boolean
  title?: string
}

export interface Team1 {
  name: string
  id: number
}

export interface Team2 {
  name: string
  id: number
}

export interface Event {
  id: number
  name: string
}