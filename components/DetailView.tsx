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

const FixedWidthTableCell = (props: object) => (
  <TableCell {...props} style={{ width: 150 }} />
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
                  <FixedWidthTableCell>Name</FixedWidthTableCell>
                  <StrongTableCell>{name}</StrongTableCell>
                </TableRow>
                <TableRow>
                  <FixedWidthTableCell>Birth Year</FixedWidthTableCell>
                  <StrongTableCell>{birthYear}</StrongTableCell>
                </TableRow>
                <TableRow>
                  <FixedWidthTableCell>Species</FixedWidthTableCell>
                  <StrongTableCell>
                    <LoadData sources={species} />
                  </StrongTableCell>
                </TableRow>
                <TableRow>
                  <FixedWidthTableCell>Movies</FixedWidthTableCell>
                  <StrongTableCell>
                    <LoadData sources={films} />
                  </StrongTableCell>
                </TableRow>
                <TableRow>
                  <FixedWidthTableCell>Spaceships</FixedWidthTableCell>
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