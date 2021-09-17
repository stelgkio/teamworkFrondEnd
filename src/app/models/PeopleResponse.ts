export class People {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
}


export class  PeopleList {
  count: number;
  next: string;
  previous?: any;
  results: People[];
}


export class HomeWorld {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}


export class PeopleData {
  id:string;
  name: string;
  mass: string;
  height: string;
  created: Date;
  edited: Date;
  planetname:string;
  planetUrl:string;

}


export class PlanetData {
  name: string;
  diameter: string;
  climate: string;
  population: string;

}


