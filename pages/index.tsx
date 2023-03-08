import axios from 'axios';

import ListView from '@/components/list/ListView';

import { Person, Species, Movie } from '@/constants/types';

const BASE_URL = 'https://swapi.dev/api';

async function getAllData<T>(url: string, data: T[]): Promise<T[]> {
  const response = await axios.get(url);
  const {
    data: { next, results },
  } = response;

  const mergedData: T[] = [...data, ...results];

  if (next) {
    return await getAllData(next, mergedData);
  }

  return mergedData;
}

export async function getStaticProps() {
  const people = await getAllData<Person>(`${BASE_URL}/people`, []);
  const species = await getAllData<Species>(`${BASE_URL}/species`, []);
  const movies = await getAllData<Movie>(`${BASE_URL}/films`, []);

  return {
    props: {
      people: people,
      species: species,
      movies: movies,
    },
  };
}

export default ListView;
