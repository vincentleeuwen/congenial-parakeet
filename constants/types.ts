export interface Person {
  name: string;
  url: string;
  species: string;
  birth_year: string;
  films: string[];
}

export interface Species {
  name: string;
  url: string;
}

export interface Movie {
  title: string;
  url: string;
}
