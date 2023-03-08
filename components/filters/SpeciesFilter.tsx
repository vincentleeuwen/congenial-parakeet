import queryString from 'query-string';
import { useRouter } from 'next/router';

import { Species } from '@/constants/types';

import { getParam, params } from './utils';

import styles from './SpeciesFilter.module.css';

interface Props {
  species: Species[];
}

const Filters = ({ species }: Props) => {
  const router = useRouter();
  const { query } = router;

  const selectedSpecies: string[] = getParam(query, params.species);

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const url = event.target.value;

    let newQuery;
    const exists = selectedSpecies.includes(url);
    if (exists) {
      newQuery = selectedSpecies.filter((u) => u !== url);
    } else {
      newQuery = [...selectedSpecies, url];
    }

    const finalQuery = {
      ...query,
      [params.species]: newQuery,
    };

    const stringParams = queryString.stringify(finalQuery);
    router.push(`/?${stringParams}`, undefined, { shallow: true });
  };

  return (
    <div className={styles.wrapper}>
      {species.map(({ url, name }) => (
        <div key={url}>
          <input
            type="checkbox"
            name={url}
            id={url}
            value={url}
            onChange={handleClick}
            checked={selectedSpecies.includes(url)}
          />
          <label className={styles.label} htmlFor={url}>
            {name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Filters;
