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
                  <TableCell>Name</TableCell>
                  <StrongTableCell>{name}</StrongTableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Birth Year</TableCell>
                  <StrongTableCell>{birthYear}</StrongTableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Species</TableCell>
                  <StrongTableCell>
                    <LoadData sources={species} />
                  </StrongTableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Movies</TableCell>
                  <StrongTableCell>
                    <LoadData sources={films} />
                  </StrongTableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Spaceships</TableCell>
                  <StrongTableCell>
                    <LoadData sources={starships} />
                  </StrongTableCell>
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
