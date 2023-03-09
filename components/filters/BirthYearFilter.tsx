import queryString from 'query-string';
import { useRouter } from 'next/router';

import Slider from '@mui/material/Slider';
import { params, years } from './utils';

const BirthYearFilter = () => {
  const router = useRouter();
  const { query } = router;

  const handleChange = (event: Event, newValue: number | number[]) => {
    const [min, max] = newValue as number[];
    const stringParams = queryString.stringify({ ...query, min, max });
    router.push(`/?${stringParams}`, undefined, { shallow: true });
  };

  const minAge = query?.[params.min] ? Number(query.min) : years.min;
  const maxAge = query?.[params.max] ? Number(query.max) : years.max;

  return (
    <div>
      <Slider
        getAriaLabel={() => 'Birth year range'}
        value={[minAge, maxAge]}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={years.min}
        max={years.max}
      />
    </div>
  );
};

export default BirthYearFilter;
