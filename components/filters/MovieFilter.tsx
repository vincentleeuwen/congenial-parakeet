import queryString from 'query-string';
import { useRouter } from 'next/router';

import { Movie } from '@/constants/types';

import { getParam, params } from './utils';

import styles from './MovieFilter.module.css';

interface Props {
  movies: Movie[];
}

const MovieFilters = ({ movies }: Props) => {
  const router = useRouter();
  const { query } = router;

  const selectedMovies: string[] = getParam(query, params.movies);

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const url = event.target.value;

    let newQuery;
    const exists = selectedMovies.includes(url);
    if (exists) {
      newQuery = selectedMovies.filter((u) => u !== url);
    } else {
      newQuery = [...selectedMovies, url];
    }

    const finalQuery = {
      ...query,
      [params.movies]: newQuery,
    };

    const stringParams = queryString.stringify(finalQuery);
    router.push(`/?${stringParams}`, undefined, { shallow: true });
  };

  return (
    <div>
      {movies.map(({ url, title }) => (
        <div key={url}>
          <input
            type="checkbox"
            name={url}
            id={url}
            value={url}
            onChange={handleClick}
            checked={selectedMovies.includes(url)}
          />
          <label className={styles.label} htmlFor={url}>
            {title}
          </label>
        </div>
      ))}
    </div>
  );
};

export default MovieFilters;
