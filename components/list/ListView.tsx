import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

import { Movie, Person, Species } from '@/constants/types';
import BirthYearFilter from '@/components/filters/BirthYearFilter';
import MovieFilter from '@/components/filters/MovieFilter';
import SpeciesFilter from '@/components/filters/SpeciesFilter';
import { filterPeople } from '@/components/filters/utils';

import styles from './ListView.module.css';

interface Props {
  people: Person[];
  species: Species[];
  movies: Movie[];
}

const ListView = ({ people, species, movies }: Props) => {
  const router = useRouter();
  const { query } = router;

  return (
    <>
      <Head>
        <title>Star wars app</title>
      </Head>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper>
            <div className={styles.filters}>
              <p>Birth year:</p>
              <BirthYearFilter />
              <p>Movies:</p>
              <MovieFilter movies={movies} />
              <p>Species:</p>
              <SpeciesFilter species={species} />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="character table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Birth Year</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filterPeople(people, query).map((person) => {
                  const href = person.url.replace(
                    'https://swapi.dev/api/people/',
                    '/characters/'
                  );
                  return (
                    <TableRow key={person.url}>
                      <TableCell>
                        <Link href={href}>{person.name}</Link>
                      </TableCell>
                      <TableCell>{person.birth_year}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default ListView;
