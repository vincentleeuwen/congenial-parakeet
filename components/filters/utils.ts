import { Person } from '@/constants/types';

interface ParsedUrlQuery extends NodeJS.Dict<string | string[]> {};

export enum params {
  species = 's',
  movies = 'm',
}

enum filterkeys {
  species = 'species',
  movies = 'films',
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

export const filterPeople = (people: Person[], query: ParsedUrlQuery): Person[] => {
  const movieFiltered = filterData(people, getParam(query, params.movies), filterkeys.movies);
  const specieFiltered = filterData(movieFiltered, getParam(query, params.species), filterkeys.species);
  return specieFiltered;
};