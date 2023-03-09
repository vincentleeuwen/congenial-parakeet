import Grid from '@mui/material/Grid';

import { Movie, Person } from '@/constants/types';

interface Props {
  person: Person;
  movies: Movie[];
}

const DetailView = ({ person: { name, species, films } }: Props) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <p>filters</p>
        </Grid>
        <Grid item xs={12} md={8}>
          <p>data</p>
        </Grid>
      </Grid>
      <div>
        {/* <Button variant="contained">Hello World</Button> */}
        <table>
          <tr>
            <td>Name</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Species</td>
            <td>{species}</td>
          </tr>
          <tr>
            <td>Movies</td>
            <td>{films}</td>
          </tr>
          <tr>
            <td>Spaceships</td>
            <td>{name}</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default DetailView;
