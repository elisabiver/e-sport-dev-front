import { User } from './user';

export class Team {
  
    _id : string;
    name: string;
    players: string[];
    logo: string;
    createdAt: string;
    totalPlayers: number;
    playersInTeam: User[]
  }