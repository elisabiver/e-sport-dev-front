import { User } from './user';

export class Team {
  
    _id : string;
    name: string;
    players: User[];
    logo: string;
    createdAt: string;
  }