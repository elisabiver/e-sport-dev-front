export class Tournament {
    _id: string; 
    name: string;
    location: {
      type: string,
      coordinates: number[]
    };
    teams: string[];
    createdAt: string;
  }