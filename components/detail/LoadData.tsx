import axios from 'axios';
import { useState, useEffect } from 'react';

import Skeleton from '@mui/material/Skeleton';

interface Props {
  sources: string[];
}

interface Data {
  name?: string;
  title?: string;
  url: string;
}

export default function LoadData({ sources }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Data[]>([]);
  const [errors, setErrors] = useState<number>(0);

  useEffect(() => {
    const getData = async (endpoints: string[]) => {
      setLoading(true);
      const requests = endpoints.map((endpoint) => axios.get(endpoint));
      const results = await Promise.allSettled(requests);
      const fulfilled = results.map((result) => {
        if (result.status === 'fulfilled') {
          return result.value.data;
        }
      });
      setData(fulfilled);
      setErrors(results.filter(({ status }) => status === 'rejected').length);
      setLoading(false);
    };

    if (sources.length > 0) {
      getData(sources);
    }
  }, [sources]);

  if (loading)
    return (
      <span>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      </span>
    );

  const labels = data.map((s) => s?.name || s?.title);

  return (
    <>
      <span>{labels.join(', ')}</span>
      {errors > 0 && <span style={{ color: 'red' }}>{errors} errors</span>}
    </>
  );
}
