import { Person } from '@/constants/types';

interface ParsedUrlQuery extends NodeJS.Dict<string | string[]> {};

export enum params {
  species = 's',
  movies = 'm',
  min = 'min',
  max = 'max',
}

enum filterkeys {
  species = 'species',
  movies = 'films',
}

export enum years {
  min = 0,
  max = 1000,
}

export const getParam = (query: ParsedUrlQuery, param: params): string[] => {
  // when it's only one, query resturns a string, otherwise array
  const item = query?.[param];
  if (item) {
    return Array.isArray(item) ? item : [item];
  }
  return [];
};

const filterData = (people: Person[], selected: string[], key: filterkeys) : Person[] => {
  if (selected.length === 0) return people;
  return people.filter(person => {
    const data = person[key];
    for (const item of selected) {
      if (data.includes(item)) return true;
    }
    return false;
  })
}

const filterBirthYear = (people: Person[], min: number, max: number) : Person[] => {
  return people.filter(person => {
    const { birth_year: birthYear } = person;
    // if birth year is unknown, for now we just return this person
    if (birthYear === 'unknown') return true;
    // otherwise, parse birthYear to number and match to min / max age
    const birthYearNumber = Number(birthYear.replace('BBY', ''));
    return birthYearNumber > min && birthYearNumber < max;
  });
};

export const filterPeople = (people: Person[], query: ParsedUrlQuery): Person[] => {
  const movieFiltered = filterData(people, getParam(query, params.movies), filterkeys.movies);
  const speciesFiltered = filterData(movieFiltered, getParam(query, params.species), filterkeys.species);
  
  const minAge = query?.[params.min] ? Number(query.min) : years.min;
  const maxAge = query?.[params.max] ? Number(query.max) : years.max;

  const ageFiltered = filterBirthYear(speciesFiltered, minAge, maxAge);
  
  return ageFiltered;
};