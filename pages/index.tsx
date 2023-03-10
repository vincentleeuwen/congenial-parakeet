import ListView from '@/components/List/ListView';

import { Person, Species, Movie } from '@/constants/types';
import { BASE_URL } from '@/constants/api';
import { getAllData } from '@/utils/data';

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
