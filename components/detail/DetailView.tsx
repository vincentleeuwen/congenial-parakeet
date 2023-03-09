import { Movie, Person } from '@/constants/types';

interface Props {
  person: Person;
  movies: Movie[];
}

const DetailView = ({ person: { name, species, films } }: Props) => {
  return (
    <div>
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
  );
};

export default DetailView;
