export class Tournament {
    name: string;
    location: {
      type: string,
      coordinates: number[]
    };
    teams: string;
    createdAt: string;
  }