export class User {
    id: string;
    firstName: string;
    lastName: string;
    pseudo: string;
    password: string;
    birthDate: Date;
    picture: string;
    gender: "male" | "female"; //si enum mettre string
    createdAt: string;
    updatedAt: string;
  }

/*   enum Gender {
      MALE = "male", FEMALE = "female"
  }

  export function genderFromString(gender: string): Gender {
    
  } */