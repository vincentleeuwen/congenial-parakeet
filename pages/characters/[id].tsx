import axios from 'axios';

import DetailView from '@/components/DetailView';
import { BASE_URL } from '@/constants/api';
import { Person } from '@/constants/types';
import { getAllData } from '@/utils/data';

interface PageProps {
  params: {
    id: number;
  };
}

export async function getStaticProps({ params: { id } }: PageProps) {
  const { data: person } = await axios.get(`${BASE_URL}/people/${id}/`);

  return {
    props: {
      person,
    },
  };
}

export async function getStaticPaths() {
  const people = await getAllData<Person>(`${BASE_URL}/people`, []);

  const paths = people.map((person) => {
    const id = person.url
      .replace('https://swapi.dev/api/people/', '')
      .replace('/', '');
    return {
      params: { id },
    };
  });

  return { paths, fallback: false };
}

export default DetailView;
