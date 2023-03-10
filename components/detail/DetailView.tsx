import Head from 'next/head';

import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from '@mui/material';

import { Person } from '@/constants/types';

import LoadData from './LoadData';

interface Props {
  person: Person;
}

const StrongTableCell = (props: object) => (
  <TableCell {...props} style={{ fontWeight: 'bold' }} />
);

const DetailView = ({
  person: { name, species, films, starships, birth_year: birthYear },
}: Props) => {
  return (
    <>
      <Head>
        <title>{name} - Star wars app</title>
      </Head>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <StrongTableCell>Name</StrongTableCell>
                  <TableCell>{name}</TableCell>
                </TableRow>
                <TableRow>
                  <StrongTableCell>Birth Year</StrongTableCell>
                  <TableCell>{birthYear}</TableCell>
                </TableRow>
                <TableRow>
                  <StrongTableCell>Species</StrongTableCell>
                  <TableCell>
                    <LoadData sources={species} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <StrongTableCell>Movies</StrongTableCell>
                  <TableCell>
                    <LoadData sources={films} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <StrongTableCell>Spaceships</StrongTableCell>
                  <TableCell>
                    <LoadData sources={starships} />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default DetailView;
