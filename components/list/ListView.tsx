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

        <meta
          name="description"
          content="Star wars app generated by create next app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>people</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper>
            <div className={styles.filters}>
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
                <TableRow></TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      <main className={styles.main}>
        <section className={styles.filters}></section>
        <section>
          <table className={styles.table}>
            <tr>
              <th>Name</th>
              <th>Birth year</th>
            </tr>

            {filterPeople(people, query).map((person) => {
              const href = person.url.replace(
                'https://swapi.dev/api/people/',
                '/characters/'
              );
              return (
                <tr key={person.url}>
                  <td>
                    <Link href={href}>{person.name}</Link>
                  </td>
                  <td>{person.birth_year}</td>
                </tr>
              );
            })}
          </table>
        </section>
      </main>
    </>
  );
};

export default ListView;
